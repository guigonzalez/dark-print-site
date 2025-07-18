#!/bin/bash

# Script para atualizar preços do Dark Print
echo "=== Atualizador de Preços Dark Print ==="
echo "Atualizando preços baseado na mrprint.com.br..."
echo ""

# Verificar se existe a pasta tools
if [ ! -d "tools" ]; then
    echo "❌ Pasta tools não encontrada!"
    echo "Execute este script na raiz do projeto."
    exit 1
fi

# Entrar na pasta tools
cd tools

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "Instale o Node.js em: https://nodejs.org/"
    exit 1
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Executar atualização
echo "🔄 Executando atualização de preços..."
node run-update.js

# Voltar para a raiz
cd ..

echo ""
echo "✅ Processo concluído!"
echo "📁 Verifique o arquivo index.html na raiz do projeto"
echo "🚀 Pronto para commit e deploy no GitHub Pages"