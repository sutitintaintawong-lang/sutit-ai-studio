import { useState } from "react";


function AIImage(){

const [prompt,setPrompt] = useState("");

const [image,setImage] = useState(null);


function generateImage(){

alert(
"AI Image Generator พร้อมเชื่อมต่อระบบ AI"
);


// ตัวอย่างพื้นที่แสดงผล
setImage(
"https://placehold.co/512x512?text=AI+IMAGE"
);

}



return(

<div>

<h1>
🖼 AI Image Generator
</h1>


<p>
Create images from text
</p>


<textarea

value={prompt}

onChange={
(e)=>setPrompt(e.target.value)
}

placeholder="
Describe your image...
"

/>


<br/>


<button
onClick={generateImage}
>
Generate
</button>



{
image &&

<div>

<h3>
Result
</h3>


<img

src={image}

width="512"

/>


</div>

}



</div>

)


}


export default AIImage;
