const createMockDocument = (value) => {
  document.body.innerHTML = `
  <input type="text" id="new-todo" value=${value}/>
  <ul class="container">
    <li class="list-section"></li>
  </ul>
  `;
};

export default createMockDocument;
