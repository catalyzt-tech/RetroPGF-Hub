import CheckmarkOutline from "@carbon/icons-react/lib/CheckmarkOutline";

export default function CheckListItem({
    word
}:{
    word:string;
})  {

return (

    <li className="flex items-center mt-2">
      <label className="flex items-center cursor-pointer">
        <CheckmarkOutline size={24}/>
        <span className="ml-2">{word}</span>
      </label>
    </li>

    )

}
