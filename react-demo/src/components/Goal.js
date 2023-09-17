export default function Goal(pr){
 
    return (
      <li>
              <h1>{pr.id}</h1>
              <h2>{pr.title}</h2>
              <h3>{pr.children}</h3>
              </li>
    )

}