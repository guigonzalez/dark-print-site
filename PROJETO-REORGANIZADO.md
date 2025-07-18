# Projeto Dark Print - Estrutura Reorganizada

## 🎯 Objetivo Alcançado

O projeto foi reorganizado para separar claramente o site (para GitHub Pages) das ferramentas de atualização de preços (para uso local).

## 📁 Estrutura Final

```
darkprint/
├── README.md                    # Descrição do projeto
├── index.html                   # Site principal (pronto para GitHub Pages)
├── styles.css                   # Estilos do site
├── script.js                    # JavaScript do site
├── images/                      # Imagens dos produtos
├── .gitignore                   # Exclui ferramentas do Git
├── update-prices.sh             # Script rápido para atualização
└── tools/                       # Ferramentas (não vão para GitHub Pages)
    ├── package.json
    ├── run-update.js            # Script principal
    ├── price-updater-simple.js
    ├── scraper.js
    ├── test-price-update.js
    └── documentação...
```

## 🚀 Como Usar

### 1. Atualização Rápida (Recomendado)
```bash
./update-prices.sh
```

### 2. Atualização Manual
```bash
cd tools
node run-update.js
```

### 3. Teste
```bash
cd tools
node test-price-update.js
```

## 📋 Workflow Recomendado

1. **Atualizar preços localmente:**
   ```bash
   ./update-prices.sh
   ```

2. **Verificar o site:**
   - Abrir `index.html` no navegador
   - Confirmar que os preços estão corretos

3. **Fazer commit e push:**
   ```bash
   git add .
   git commit -m "Atualização de preços"
   git push origin main
   ```

4. **Deploy automático:**
   - GitHub Pages detecta mudanças
   - Site atualizado automaticamente

## 🔧 Funcionalidades

### ✅ Implementado
- [x] Preços por 100 unidades em todos os produtos
- [x] Sistema de atualização automática
- [x] Backup automático antes de mudanças
- [x] Logs detalhados do processo
- [x] Margem de lucro configurável (35%)
- [x] Estrutura organizada
- [x] Documentação completa

### 🛡️ Segurança
- [x] Ferramentas excluídas do repositório público
- [x] Backups automáticos
- [x] Preços baseados na mrprint.com.br
- [x] Validação de arquivos

## 📊 Preços Atuais

Os preços foram atualizados com base na pesquisa da mrprint.com.br:

| Produto | Preço Final (com 35% margem) |
|---------|------------------------------|
| Cartões de Visita | R$ 24,98 |
| Folders | R$ 17,82 |
| Agendas | R$ 44,55 |
| Calendários | R$ 34,83 |
| Banners | R$ 2,56 |
| Flyers | R$ 11,48 |
| Cartazes | R$ 3,51 |
| Displays de Mesa | R$ 8,10 |
| Adesivos | R$ 15,12 |
| Etiquetas | R$ 10,13 |
| Lacres | R$ 8,51 |
| Tags | R$ 6,08 |
| Cartelas para Bijuteria | R$ 22,28 |
| Fitas de Cetim | R$ 1,82 |
| Brindes Personalizados | R$ 37,80 |

## 🎨 Melhorias Visuais

- Preços destacados com gradiente laranja
- Formatação profissional "A partir de R$ XX,XX"
- Hover effects nos produtos
- Design responsivo mantido

## 📝 Arquivos Ignorados pelo Git

O `.gitignore` foi configurado para excluir:
- `tools/` (ferramentas ficam apenas localmente)
- `*.backup*` (arquivos de backup)
- `node_modules/`
- Arquivos temporários

## 🔄 Automação (Opcional)

Para automatizar completamente, você pode configurar um cron job:

```bash
# Atualizar preços todo domingo às 9h
0 9 * * 0 cd /caminho/para/darkprint && ./update-prices.sh
```

## 🎯 Resultado Final

- **Site limpo** na raiz, pronto para GitHub Pages
- **Ferramentas organizadas** na pasta tools/
- **Processo simplificado** com um único comando
- **Preços competitivos** baseados na concorrência
- **Backup automático** para segurança
- **Documentação completa** para futuras atualizações

## 🚀 Próximos Passos

1. Testar o site no navegador
2. Fazer primeiro commit com a estrutura reorganizada
3. Configurar GitHub Pages (se ainda não estiver)
4. Agendar atualizações periódicas
5. Monitorar preços da concorrência

---

*Projeto reorganizado e otimizado para facilitar a manutenção e deploy.*