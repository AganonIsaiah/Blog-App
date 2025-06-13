import tableFormatter from "../utils/tableFormatter"

export default function Home() {

  const tableData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
  ];
  

  return (
    <div className="pages">
      <h1>Introduction</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a cupiditate molestias suscipit distinctio inventore porro minima dignissimos tempora atque alias dicta laborum rem, sunt earum mollitia quas modi commodi.</p>

      <h2>Header2</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet hic autem culpa possimus, quaerat nemo. Sapiente esse saepe illum autem eius corrupti tenetur, placeat nam nemo iste aperiam nobis.</p>

      <h3>Header3</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero sed tenetur commodi facere, amet quaerat, dolores reiciendis tempore ducimus consectetur laboriosam ipsum dolore distinctio deleniti eos dolor veritatis veniam.</p>


      <h2>Table</h2>
       {tableFormatter(tableData)}


    </div>
  );
}