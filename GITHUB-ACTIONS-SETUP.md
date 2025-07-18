# Configuração do GitHub Actions para Deploy

## ✅ GitHub Actions Workflow Criado!

O workflow foi enviado para o repositório. Agora precisa configurar as permissões no GitHub.

## 🔧 Configurações Necessárias no GitHub

### 1. **Configurar GitHub Pages com Actions**

Acesse: https://github.com/guigonzalez/dark-print-site/settings/pages

1. Em **Source**, selecione: **GitHub Actions**
2. Deixe as outras configurações como estão
3. Clique em **Save**

### 2. **Verificar Permissões do Repositório**

Acesse: https://github.com/guigonzalez/dark-print-site/settings/actions

1. Vá em **General** (Actions)
2. Em **Workflow permissions**, selecione:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Clique em **Save**

### 3. **Executar o Workflow**

Acesse: https://github.com/guigonzalez/dark-print-site/actions

1. Clique no workflow **"Deploy Dark Print to GitHub Pages"**
2. Clique em **"Run workflow"** (botão azul)
3. Clique em **"Run workflow"** novamente para confirmar

## 📊 Monitoramento

### Verificar Status:
- **Actions**: https://github.com/guigonzalez/dark-print-site/actions
- **Environments**: https://github.com/guigonzalez/dark-print-site/deployments

### Logs Detalhados:
- Clique em qualquer execução para ver logs
- Cada step mostra o progresso
- Erros são destacados em vermelho

## 🌐 Resultado Esperado

Após a configuração:
- **URL do site**: https://guigonzalez.github.io/dark-print-site/
- **Deploy automático** a cada push
- **Logs detalhados** de cada deploy
- **Rollback fácil** se necessário

## 🚀 Vantagens do GitHub Actions

### vs. Configuração Manual:
- ✅ **Mais confiável**: Menos falhas de deploy
- ✅ **Logs detalhados**: Fácil debug de problemas
- ✅ **Versionado**: Configuração no código
- ✅ **Flexível**: Fácil customização futura

### Funcionalidades:
- **Deploy automático** em push
- **Deploy manual** quando necessário
- **Concurrent protection** (evita conflitos)
- **Environment protection** (staging/production)

## 📋 Checklist

- [ ] Configurar Source para "GitHub Actions"
- [ ] Verificar permissões do repositório
- [ ] Executar workflow manualmente
- [ ] Aguardar deploy (2-5 minutos)
- [ ] Testar site: https://guigonzalez.github.io/dark-print-site/
- [ ] Verificar formulário EmailJS
- [ ] Testar responsividade mobile

## 🔄 Deploys Futuros

Depois da configuração inicial:
1. **Automático**: Todo push para main faz deploy
2. **Manual**: Botão "Run workflow" nas Actions
3. **Rápido**: ~2 minutos por deploy
4. **Confiável**: Rollback automático se falhar

## 💡 Dicas

- **Ambiente**: Cada deploy cria um "environment"
- **Histórico**: Todos os deploys ficam salvos
- **Rollback**: Fácil voltar versão anterior
- **Monitoring**: Recebe email se deploy falhar

---

**Próximos passos:**
1. Configurar Source para GitHub Actions
2. Verificar permissões
3. Executar workflow
4. Testar site online