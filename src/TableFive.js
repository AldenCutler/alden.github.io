export function TableFive({ icons }) {
  return (
    <table className='icon-table'>
      <tr>
        <td>{icons.html}</td>
        <td>{icons.css}</td>
        <td>{icons.js}</td>
        <td>{icons.node}</td>
        <td>{icons.bootstrap}</td>
      </tr>
      <tr>
        <td>{icons.c}</td>
        <td>{icons.cpp}</td>
        <td>{icons.java}</td>
        <td>{icons.linux}</td>
        <td>{icons.bash}</td>
      </tr>
      <tr>
        <td>{icons.python}</td>
        <td>{icons.jupyter}</td>
        <td>{icons.numpy}</td>
        <td>{icons.pandas}</td>
        <td>{icons.r}</td>
      </tr>
      <tr>
        <td>{icons.git}</td>
        <td>{icons.react}</td>
      </tr>
    </table>
  );
}
