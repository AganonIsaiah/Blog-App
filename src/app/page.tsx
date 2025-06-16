import tableFormatter from "../utils/tableFormatter"
import codeFormatter from "../utils/codeFormatter"

export default function Home() {

  const tableData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
  ];

  const javaCode = 
  `public class Main {
    public static void main (String[] args) {
      System.out.println("Hello world.")
    }
  }`

  const jsCode = `import React from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    
    // Handle click event
    const handleClick = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default MyComponent;`


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

      <h2>JavaScript Code</h2>
      {codeFormatter(jsCode, "javascript")}

      <h2>Java Code</h2>
      {codeFormatter(javaCode, "java")}
      <h2>Lists</h2>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>


      <h1>Text</h1>
      <em>text</em>
      <b>text2</b>
      <u>text3</u>
      <mark>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus, iste obcaecati pariatur adipisci nesciunt ipsa quam aperiam quod sint? Error iure accusamus ut atque odio, perferendis accusantium facilis, voluptatum expedita veritatis ducimus sit adipisci, aliquid eius iusto mollitia pariatur quod voluptatem consectetur labore assumenda doloremque excepturi illum? Officiis eius deserunt dolores quas veritatis praesentium, minima, facilis laborum nisi ea vitae corrupti natus nemo maiores reiciendis non vel recusandae earum quidem alias quia tenetur distinctio dolorem! Molestias veritatis maiores expedita labore doloremque dolorum vel aliquid in, nesciunt cum fuga rem, sunt, suscipit porro aliquam quam. Nobis tempora nisi, eveniet corrupti harum quas odio fuga veniam tempore quam provident dicta, ducimus labore repellat consequatur quia ullam beatae sit, suscipit in laudantium? Quasi inventore aperiam fuga corporis amet distinctio facere autem veniam deserunt, sint ipsa, cupiditate laudantium, nesciunt eaque molestias reprehenderit? Excepturi eligendi delectus placeat accusamus, perspiciatis, saepe rerum ducimus nihil dolorem maiores, aspernatur voluptatibus reprehenderit fuga expedita eum. Aliquid modi, recusandae, veritatis cum ducimus ipsum molestiae perferendis possimus libero voluptas tempora atque commodi fuga sequi assumenda accusamus itaque. Dolore eaque hic minus distinctio asperiores, modi odio eum debitis? Itaque unde dignissimos corporis vel fuga ipsam quam. Atque a nulla deserunt suscipit vel quibusdam eos, molestias reiciendis expedita reprehenderit nemo vero maxime pariatur veritatis soluta aperiam, unde voluptates quisquam consectetur magnam blanditiis fugiat recusandae iure? Aliquid quam quod totam blanditiis, saepe voluptates corporis! Dolorem sint perspiciatis consequatur sed molestiae sapiente, illum nesciunt excepturi architecto nostrum aut eius molestias quaerat sunt quam velit voluptatem odit vero odio illo cum! Reprehenderit doloribus, perferendis et facilis blanditiis quidem omnis iusto repellendus corporis quam ut itaque officia facere cum distinctio, laboriosam assumenda maiores nesciunt vel saepe eligendi natus velit. Possimus, ipsam officia et tempore harum maxime labore! Saepe quibusdam dolore deserunt neque esse obcaecati sint laudantium!</mark>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam explicabo pariatur, voluptate cum officiis tempora perferendis laborum, incidunt dolore ratione inventore rerum reiciendis consectetur delectus atque fugit voluptates itaque quas quibusdam aperiam numquam sapiente, soluta quidem mollitia. Vitae, saepe, sunt eveniet suscipit eos tempora cupiditate nam neque iste veniam a laborum cumque deserunt voluptatum repellendus maxime eius aut. Possimus vitae a, id aspernatur necessitatibus alias distinctio doloribus similique quaerat ipsa magni officia sed doloremque rerum odit in amet expedita nam, culpa natus! Vel, tenetur? Earum hic repellendus, deleniti deserunt totam cum quas quasi ipsam iste commodi sunt illo necessitatibus praesentium incidunt fugiat illum eius, magni quam accusamus eum optio. Dolorum, consequatur quod ad illo voluptatem, voluptate obcaecati quisquam tenetur, odio sequi rerum. Sapiente maiores debitis deserunt placeat voluptates earum nobis velit veritatis optio! Deleniti eaque provident blanditiis repellat aliquam eius sequi repudiandae quibusdam? Nihil ut nisi error repellendus, minima aut repellat quidem veniam laborum sunt molestiae ex odit sed numquam. Illo fuga vel in, velit id earum quaerat ipsam nam sit aliquam, libero modi, nobis assumenda soluta iste molestias quam? Illo assumenda necessitatibus, quibusdam a ea repellat doloremque voluptatibus! Reiciendis cupiditate recusandae dolor esse, molestiae nostrum deserunt cum cumque odit consectetur molestias saepe mollitia iusto quisquam, nulla rem laboriosam numquam sint facere magni, doloremque odio illo quis. Illo amet at commodi consequatur repudiandae ipsum possimus blanditiis, voluptates minus a ea pariatur iste inventore expedita consequuntur sint illum necessitatibus corrupti labore molestias quod eos adipisci cumque? Quaerat earum fugit est tempora, perspiciatis id esse ex vitae pariatur natus quod voluptatum sint asperiores dolores architecto et nulla tenetur ratione optio ab inventore illum minima. A voluptate obcaecati voluptatum quo, debitis porro labore voluptatibus deserunt ipsa ducimus, repudiandae esse, repellat veniam dignissimos est quasi. Est enim explicabo, cum tempore in maiores numquam vero quo eius ea doloremque aperiam delectus illum blanditiis cumque dolorem accusamus voluptate eos magnam nostrum, velit quaerat id recusandae quam? Id repudiandae mollitia doloribus earum reprehenderit numquam possimus excepturi praesentium eligendi in quis ea voluptate dolore saepe ratione distinctio, consequatur quasi molestias enim. Illo sint, soluta iusto id ex sit illum quis exercitationem nulla placeat ipsam veritatis distinctio obcaecati eius et hic saepe aliquam sequi qui. Eligendi, consequatur? Officia libero ipsum velit soluta, fugit quo laboriosam amet perspiciatis repudiandae nobis quibusdam nisi voluptate rem facilis ut consectetur totam tenetur fugiat doloribus! Earum cumque adipisci aliquid minus dolorum iure officiis labore voluptatum, porro odio, dolores tenetur quam molestiae necessitatibus deserunt ab vitae aut explicabo sunt! Adipisci quos odio rem blanditiis. Maiores inventore nulla, quibusdam praesentium vel eligendi ut! Officiis deleniti quos reprehenderit reiciendis ipsum optio eum, repellendus, dicta unde molestiae odio? Distinctio earum dolorum, repellat odit error optio sed nihil ducimus dicta aliquid! Et ducimus ut natus ea eius, sint beatae fuga nisi ipsum eum, odit accusantium, esse modi exercitationem alias non earum repellendus omnis labore obcaecati dolorem. Suscipit neque repellendus ipsa voluptate aperiam esse molestias necessitatibus consectetur deserunt dignissimos iste perferendis eligendi error sed, voluptatibus accusantium dolores itaque eos maxime eum repellat, atque libero. Odit, itaque, sequi qui voluptatem exercitationem vitae pariatur corrupti debitis atque possimus voluptatum nemo ipsa, est fugiat? Reiciendis corporis explicabo aperiam debitis quis iure inventore obcaecati, odit quod recusandae tempora natus architecto. Provident earum quae maxime deserunt facere hic laboriosam ut dolores culpa sit adipisci veniam, tempore odit, blanditiis nostrum optio exercitationem laudantium officia, vel esse veritatis id doloremque inventore deleniti! Quae officiis voluptatem ducimus, reprehenderit aperiam similique. Iusto neque dolorem quia, temporibus at odit alias ab voluptatum consequatur ipsa quaerat harum laborum deleniti dolore excepturi deserunt fugit natus sequi, enim possimus quibusdam iure, delectus ducimus.</p>
    
      
      
    </div>
  );
}