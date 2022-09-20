import React,{FC, useEffect, useState} from "react";
import Image from "next/image";
import styles from './Card.module.css';
import axios from 'axios'
import {GithubUserData} from '@customTypes/search'


export const Card:FC<GithubUserData> = ({name,avatar_url,email,bio, repos_url}) => {
    const [repositories, setRepositories] = useState([]);
    const getRepositories = async (url:string) => {
      if(repos_url){
        await axios.get(url)
          .then((res)=>{
              setRepositories(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
      }
    }
    useEffect(()=>{
      getRepositories(repos_url)
    },[repos_url])
    return (
      <div>
        <>
        <div className="container-fluid mt-2">
          <div className="row d-flex justify-content-center">
            <div className={`col-md-7 ${styles.card}`}>
                <div className={`${styles.card_image_container} d-flex justify-content-center align-items-center`  }>
                    <div className={`${styles.card_image}`}>
                      {avatar_url ? <Image src={avatar_url} layout="responsive" height="200" width="200"/> : ''}
                    </div>
                </div>
                <div className={`${styles.card_details_container} d-flex flex-column align-items-center p-3`}>
                    <h1>{name}</h1>
                    <p className={`${styles.card_email}`}>{email}</p>
                    <p className={`${styles.card_bio}`}> {bio}</p>
                    {repos_url ? <h2 className="d-flex align-self-start"> Repository </h2> : ''}
                    <div className="list-group w-auto">{
                      repositories.map(repository=> {
                        return <a href={repository.html_url}  target="_blank" key={repository.id} className="list-group-item list-group-item-action mb-1 d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">{repository.name}</h6>
                            <p className="mb-0 opacity-75">{repository.description}</p>
                          </div>
                          <small className="opacity-50 text-nowrap">{repository.pushed_at.split('T')[0]}</small>
                        </div>
                      </a>
                      })
                    }</div>
               </div>
            </div>
          </div>
        </div>
        </>
      </div>
    )
}