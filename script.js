async function buscarUsuario() {
    const userId = document.getElementById('userId').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    if (!userId) {
        resultado.innerHTML = '<p style="color:red;">Por favor, insira um ID válido.</p>';
        return;
    }
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('Usuário não encontrado');
        
        const user = await response.json();
        if (!user.id) throw new Error('Usuário não encontrado');
        
        resultado.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <p><strong>Empresa:</strong> ${user.company.name}</p>
        `;
    } catch (error) {
        resultado.innerHTML = '<p style="color:red;">Usuário não encontrado.</p>';
    }
}
