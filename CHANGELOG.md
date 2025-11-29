# Changelog

## [Versão Builder] - 2025-11-28

### Adicionado
- **Vídeo em Serviços:** Implementado suporte para vídeos MP4 nos cards de serviço (autoplay, loop, mute).
- **WhatsApp:** Botão "Agendar Reunião Estratégica" agora leva direto para o WhatsApp com mensagem personalizada.
- **SEO Técnico:** Criação de `robots.txt`, `sitemap.xml` e Meta Tags completas (Open Graph, Twitter).

### Alterado
- **Design:** Aplicado efeito Glassmorphism (vidro fosco) no menu mobile e barra superior.
- **Build:** Configuração ajustada para `output: 'export'` visando compatibilidade com HostGator (Site Estático).
- **Conteúdo:** Textos de contato e botões traduzidos e refinados para conversão.

### Corrigido
- **Tela Branca:** Removida pasta `api/` que causava conflito com a exportação estática.
- **Build Errors:** Removidos arquivos de template quebrados (`blog-2.jsx`) e corrigido ISR no blog para compatibilidade estática.
- **Acessibilidade:** Ajuste de idioma HTML para `pt-BR` e dimensões de imagens para evitar CLS.
