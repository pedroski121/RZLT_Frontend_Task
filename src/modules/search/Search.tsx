import React, {FC,useState ,FormEvent, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import {SearchForm} from '@components/search/SearchForm';
import {Card} from "@components/search/Card";
import {GithubUserData} from "@customTypes/search";
import axios, {AxiosResponse} from "axios";
import { persistentStorage } from '@utils/local-storage';

import {GithubURL} from './github-url'

export const SearchBody:FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [currentName, setCurrentName] = useState<string>('')
    const [userData, setUserData] = useState<GithubUserData>({});
    const [error, setError] = useState<string>('')
    const [refresh, setRefresh] = useState<boolean>(false)
    const router = useRouter() 

    const beforeRefresh = () => {
        if(!router.isReady) return
        const name = router.query.userName
        if(name){
            setUserName(`${name}`)
     }
        if(!refresh){
            setRefresh(true)
        }
    }
    async function setPage(){
        const time = new Date().toLocaleString();
        await axios.get(`${GithubURL+userName}`)
        .then((res:AxiosResponse)=>{
            const {name, avatar_url, email, bio, repos_url} = res.data;
            persistentStorage.setItem(userName,time)            
            setUserData({name,avatar_url,email,bio,repos_url})  
            setError('')})
        .catch((err)=>{
            persistentStorage.setItem(userName, time)            
            setUserData({})
            setError(err)})
            setUserName('')
        }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        router.push('/search',{
            query: {userName:currentName}
        }).then(()=>{
            router.reload()})
    }

    const onCurrentNameChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setCurrentName(e.target.value);
    }
    useEffect(()=>{
        beforeRefresh()
        if(router.isReady && userName){
            setPage()
        }
    },[router.isReady,refresh])
    return <div data-testid="search_body">
    <>
    <SearchForm handleSubmit={handleSubmit} onCurrentNameChange={onCurrentNameChange} currentName={currentName} error={error}/>
    <Card {...userData}/>
    </>
    </div>
}