let cartItems = [];

function addToCart() {
  // Obtener los valores del producto
  const productTitle = event.target.parentNode.querySelector('.card-title').textContent;
  const productPrice = event.target.parentNode.querySelector('.Precio').textContent;
  const productImage = event.target.parentNode.parentNode.querySelector('img').src;

  // Crear un objeto con los datos del producto
  const product = {
    title: productTitle,
    price: productPrice,
    image: productImage
  };

  // Agregar el producto al carrito
  cartItems.push(product);

  // Actualizar el contenido del carrito en la ventana modal
  updateCartModal();
}

function updateCartModal() {
  const cartItemsList = document.getElementById('cartContent');
  cartItemsList.innerHTML = '';

  let totalPrice = 0;

  if (cartItems.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'El carrito está vacío.';
    emptyMessage.classList.add('text-center', 'my-4');
    cartItemsList.appendChild(emptyMessage);
  } else {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');

    const thead = document.createElement('thead');
    const theadRow = document.createElement('tr');
    const productTh = document.createElement('th');
    productTh.textContent = 'Producto';
    const priceTh = document.createElement('th');
    priceTh.textContent = 'Precio';
    theadRow.appendChild(productTh);
    theadRow.appendChild(priceTh);
    thead.appendChild(theadRow);

    const tbody = document.createElement('tbody');

    cartItems.forEach(item => {
      const bodyRow = document.createElement('tr');

      const productCell = document.createElement('td');
      const productImage = document.createElement('img');
      productImage.src = item.image;
      productImage.alt = item.title;
      productImage.style.maxWidth = '50px';
      const productName = document.createElement('span');
      productName.textContent = item.title;
      productCell.appendChild(productImage);
      productCell.appendChild(productName);

      const priceTd = document.createElement('td');
      priceTd.textContent = item.price;

      bodyRow.appendChild(productCell);
      bodyRow.appendChild(priceTd);
      tbody.appendChild(bodyRow);

      // Sumar el precio del producto al total
      totalPrice += parseFloat(item.price.replace('$', ''));
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    cartItemsList.appendChild(table);

    // Mostrar el total
    const totalPriceElement = document.createElement('p');
    totalPriceElement.classList.add('text-end', 'fw-bold', 'mt-3');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartItemsList.appendChild(totalPriceElement);
  }
}

function navigateToCart() {
  const cartModal = document.getElementById('cartModal');
  const bsModal = new bootstrap.Modal(cartModal);
  bsModal.show();
  updateCartModal();
}

  