
import {proj_list} from './projects'
import bg from './bg.png'
function App() {
  return (
    <div className="App">
      <img className='img1' src={bg} alt="rabee"/>
     <h2 className="title">Projects List</h2>
     <div className="projects-container">
      {
        proj_list.map((proj)=>{
          return <p key={proj.id} className='proj-name'><a href={proj.link} target="_blank" rel="noreferrer">{proj.name}</a></p>
        })
      }
      <div className='sig'>Rabee Jaramani</div>
     </div>
    </div>
  );
}

export default App;
