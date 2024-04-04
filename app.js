const contacts =  [
  { 
    id: 1,
    name: 'Juan', 
    telefono: '123-456-7890', 
    email: 'juan@example.com', 
    imagen: 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 2,
    name: 'María', 
    telefono: '234-567-8901', 
    email: 'maria@example.com', 
    imagen: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 3,
    name: 'Ana', 
    telefono: '456-789-0123', 
    email: 'ana@example.com', 
    imagen: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 4,
    name: 'Jose', 
    telefono: '567-890-1234', 
    email: 'luis@example.com', 
    imagen: 'https://images.unsplash.com/photo-1618517047977-854f5c4b6976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  }
];

const container = document.getElementById('container')

contacts.forEach(contact => {
  const html = `
    <article>
      <h3>${contact.name}</h3>
      <img src="${contact.imagen}" alt="${contact.name}">
      <p>Teléfono: ${contact.telefono}</p>
      <p>Email: ${contact.email}</p>
      <button onClick="addContact(${contact.id})" class="button-add">></button>
    </article>
  `;
  container.innerHTML += html;
});

function addContact(id) {
  const contactFinded = contacts.find(contact => contact.id === id);
  if (contactFinded) {
    const { name, telefono, email } = contactFinded;
    alert(`Nombre: ${name}\nTeléfono: ${telefono}\nEmail: ${email}`);
  } 
}