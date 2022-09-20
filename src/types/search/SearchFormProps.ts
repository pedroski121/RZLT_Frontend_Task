import { FormEvent, ChangeEvent} from "react";

export type SearchFormProps = {
    handleSubmit(e: FormEvent): void;
    onCurrentNameChange(e:ChangeEvent):void;
    currentName:string;
    error:string;
}