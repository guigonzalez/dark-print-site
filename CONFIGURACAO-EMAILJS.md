# Configuração do EmailJS - Dark Print

## 📧 Formulário de Orçamento Implementado!

O formulário de captura de leads está pronto. Agora você precisa configurar o EmailJS para receber os emails.

## 🛠️ Passos para Configurar EmailJS

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" 
3. Crie sua conta gratuita
4. Confirme seu email

### 2. Configurar Serviço de Email
1. No painel do EmailJS, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor:
   - **Gmail** (recomendado)
   - **Outlook** 
   - **Yahoo**
   - Outros
4. Conecte sua conta de email
5. Anote o **Service ID** (ex: `service_abc123`)

### 3. Criar Template de Email
1. Clique em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template:

**Subject**: `Novo Orçamento - {{produto}} - {{nome}}`

**Content**:
```
Novo orçamento solicitado em {{data}} às {{hora}}

DADOS DO CLIENTE:
- Nome: {{nome}}
- Empresa: {{empresa}}
- Email: {{email}}
- Telefone: {{telefone}}

DETALHES DO PROJETO:
- Produto: {{produto}}
- Quantidade: {{quantidade}}
- Prazo: {{prazo}}

MENSAGEM:
{{mensagem}}

---
Formulário enviado pelo site Dark Print
```

4. Salve e anote o **Template ID** (ex: `template_xyz789`)

### 4. Obter Chave Pública
1. Vá em "Account" > "General"
2. Copie a **Public Key** (ex: `abc123xyz`)

### 5. Atualizar o Código
Edite o arquivo `script.js` e substitua:

```javascript
// Linha 113: Substitua YOUR_PUBLIC_KEY
emailjs.init("mW5w7L67WpvYL87Ec");

// Linha 153: Substitua YOUR_SERVICE_ID e YOUR_TEMPLATE_ID
emailjs.send('service_fxrj1lw', 'template_i5vx3gb', templateParams)
```

**Exemplo**:
```javascript
emailjs.init("abc123xyz");
emailjs.send('service_gmail', 'template_orcamento', templateParams)
```

## 🎯 Exemplo de Configuração

### script.js (linhas a alterar):
```javascript
// Configuração do EmailJS
(function(){
    emailjs.init("user_abc123xyz456"); // Sua chave pública
})();

// Enviar email
emailjs.send('service_gmail', 'template_orcamento_darkprint', templateParams)
```

## 📋 Campos do Formulário

O formulário captura:
- ✅ **Nome** (obrigatório)
- ✅ **Empresa** (opcional)
- ✅ **Email** (obrigatório)
- ✅ **Telefone** (obrigatório, com máscara)
- ✅ **Produto** (select com todos os produtos)
- ✅ **Quantidade** (opcional)
- ✅ **Detalhes** (textarea)
- ✅ **Prazo** (select)
- ✅ **Data/Hora** (automático)

## 🎨 Funcionalidades Implementadas

### ✅ Interface
- Design dark consistente com o site
- Formulário responsivo
- Mensagens de sucesso/erro
- Loading spinner no botão

### ✅ Validação
- Campos obrigatórios
- Máscara de telefone automática
- Validação de email

### ✅ UX
- Scroll suave para seções
- Feedback visual
- Reset automático após envio

## 🔧 Teste Local

1. Configure as credenciais no `script.js`
2. Abra o `index.html` no navegador
3. Preencha o formulário
4. Clique em "Enviar Solicitação"
5. Verifique se o email chegou

## 📊 Limites da Conta Gratuita

- **200 emails/mês** (EmailJS)
- **3 templates**
- **2 serviços de email**
- Sem limite de formulários

## 🚀 Resultado Final

Após configurar:
1. Cliente preenche formulário
2. Email é enviado para você automaticamente
3. Você recebe todos os dados organizados
4. Cliente vê mensagem de confirmação
5. Você pode responder diretamente

## 📞 Contato de Fallback

O site mantém os botões de WhatsApp e email como backup, caso o formulário não funcione.

---

**Próximos passos:**
1. Criar conta no EmailJS
2. Configurar serviço e template
3. Atualizar credenciais no script.js
4. Testar envio
5. Fazer deploy no GitHub Pages