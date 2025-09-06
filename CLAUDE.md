# EcoSolar Website - v1.0.0

## Sobre o Projeto
Site empresarial para empresa fictícia de energia solar desenvolvido em Next.js, baseado no design da Enova.

## Repositório GitHub
🔗 https://github.com/marcosf63/ecosolar-website

## Versão Atual: v1.0.0 (2025-09-06)

### Características Implementadas
- ✅ Site completo com 7 seções principais
- ✅ Design responsivo com Tailwind CSS
- ✅ Calculadora interativa de economia
- ✅ Componentes React com TypeScript
- ✅ Docker com 3 modos de deploy
- ✅ Caddy para HTTPS automático
- ✅ Versionamento com Git e GitHub

### Stack Tecnológica
- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilos**: Tailwind CSS
- **Containerização**: Docker
- **Proxy**: Caddy 2
- **HTTPS**: Let's Encrypt (automático)

### Estrutura do Projeto
```
├── src/components/    # Componentes React
├── docker-compose.yml # Orquestração Docker
├── Dockerfile        # Imagem de produção
├── Caddyfile        # Configuração Caddy
└── README.md        # Documentação completa
```

### Modos de Deploy
1. **Isolado**: `docker compose up -d` (sem portas expostas)
2. **Com Caddy**: `docker compose --profile with-proxy up -d` (porta 9080)
3. **Com porta**: `docker compose --profile with-ports up -d` (porta 3000)

### Comandos Úteis
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Docker
docker compose up -d
docker compose ps
docker compose logs -f
```

### Próximas Melhorias
- [ ] Adicionar testes automatizados
- [ ] Implementar formulário de contato funcional
- [ ] Adicionar animações com Framer Motion
- [ ] Criar versão PWA
- [ ] Implementar análise de métricas