//adding product to cart

export async function addToCart(productId: string) {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add product to cart');
    }
  
    const data = await response.json();
    return data;
  }

  //remove product from cart
  
  export async function removeFromCart(productId: string) {
    const response = await fetch('/api/cart/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to remove product from cart');
    }
  
    const data = await response.json();
    return data;
  }
  