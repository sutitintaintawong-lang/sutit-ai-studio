import Sidebar from "./components/Sidebar";
import AIImage from "./pages/AIImage";

function App(){

return(

<div className="layout">


<Sidebar/>


<main className="content">

<h1>
Dashboard
</h1>
<div className="card">

<AIImage/>

</div>

<p>
Welcome to Sutit AI Studio
</p>


<div className="cards">


<div className="card">
🖼
<h3>
AI Image
</h3>
<p>
Create images with AI
</p>
</div>


<div className="card">
🎬
<h3>
AI Video
</h3>
<p>
Animate your images
</p>
</div>


<div className="card">
🤖
<h3>
AI Avatar
</h3>
<p>
Talking digital human
</p>
</div>


</div>


</main>


</div>

)

}


export default App;
