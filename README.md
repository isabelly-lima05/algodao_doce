# Algodão Doce Bebê

> Boutique digital especializada em vestuário infantil, focada em conforto, tecidos naturais e design atemporal para os primeiros momentos do bebê.

O **Algodão Doce Bebê** é um e-commerce institucional desenvolvido em Next.js, estruturado para oferecer uma experiência de navegação rápida e de fácil uso, com catálogo de produtos integrado a filtros dinâmicos e carrinho de compras funcional.

| Link do Repositório | Link de Produção (Vercel) |
| :--- | :--- |
| [GitHub Repository](https://github.com/isabelly-lima05/algodao_doce) | [Algodão Doce na Vercel](https://algodao-doce-six.vercel.app) |

---

## 💻 Sobre a Aplicação (Deploy na Vercel)

A aplicação está publicada e ativa na plataforma Vercel através do link:  
🔗 **[https://algodao-doce-six.vercel.app](https://algodao-doce-six.vercel.app)**

O projeto foi planejado e estruturado para carregar de forma ágil, utilizando componentes eficientes para otimizar a experiência de quem busca roupas de bebê de forma simples e intuitiva.

---

## ⚙️ Funcionalidades do Projeto

### 1. Páginas e Navegação (App Router)
* **Página Inicial (`/`):** Apresentação da identidade visual da boutique, carrossel com produtos destacados e banners de coleções.
* **Catálogo de Produtos (`/produtos`):**
  * Campo de busca textual que filtra produtos pelo nome à medida que o usuário digita.
  * Filtros de ordenação por menor preço, maior preço, classificação (rating) e volume de vendas.
  * Filtros categóricos focados em coleções específicas e estações do ano.
* **Sobre Nós (`/sobre`):** Linha do tempo apresentando a história da marca, valores centrais e indicadores institucionais organizados visualmente.
* **Contato (`/contato`):** Formulário estruturado para envio de mensagens com validação de preenchimento dos campos e informações para localização e atendimento.
* **Carrinho de Compras (`/carrinho`):** Resumo completo dos produtos adicionados, controle de quantidade por item, cálculo automático do valor total e exclusão de itens de forma simplificada.

### 2. Gerenciamento de Estado (Context API)
* Controle centralizado do carrinho de compras integrado de forma global. As seleções do usuário são mantidas ativas de forma dinâmica enquanto ele navega pelas diferentes seções do site.

---

## 🛠️ Tecnologias e Ferramentas

* **Framework Principal:** [Next.js](https://nextjs.org/) (App Router)
* **Linguagem de Programação:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização de Interface:** [Tailwind CSS](https://tailwindcss.com/)
* **Pacote de Ícones:** [Lucide React](https://lucide.dev/)
* **Gerenciamento de Estado:** Context API (React)
* **Plataforma de Deploy:** [Vercel](https://vercel.com)

---

## 📂 Organização de Diretórios

```text
algodao_doce/
├── public/                 # Recursos estáticos (imagens, ícones, logotipos)
├── src/
│   ├── app/                # Estrutura de rotas do Next.js (App Router)
│   │   ├── carrinho/       # Página do carrinho de compras
│   │   ├── contato/        # Formulário de contato e informações úteis
│   │   ├── produtos/       # Catálogo de produtos com sistema de filtros
│   │   ├── sobre/          # Trajetória institucional e valores
│   │   ├── layout.tsx      # Estrutura de layout global (Header, Footer, Providers)
│   │   └── page.tsx        # Página inicial (Home)
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── header.tsx      # Barra de navegação e contador do carrinho
│   │   ├── footer.tsx      # Rodapé informativo com links de redes sociais
│   │   └── ui/             # Componentes de interface modulares (cards, botões)
│   ├── context/            # Provedores de estado global
│   │   └── CartContext.tsx # Contexto responsável pela manipulação do carrinho
│   └── types/              # Definições de tipos estáticos do TypeScript
├── produtos.json           # Arquivo local com os dados mockados dos produtos
├── package.json            # Manifest de dependências e scripts de execução
├── tailwind.config.ts      # Definições de tema e utilitários do Tailwind CSS
└── tsconfig.json           # Configurações do compilador do TypeScript
```

---

## 🚀 Como Executar Localmente

### Requisitos Prévios
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em seu computador (versão 18 ou superior).

### Passo a Passo

1. **Clonar o Repositório:**
```bash
git clone https://github.com/isabelly-lima05/algodao_doce.git
```

2. **Entrar no Diretório:**
```bash
cd algodao_doce
```

3. **Instalar Dependências:**
```bash
npm install
```

4. **Iniciar Servidor de Desenvolvimento:**
```bash
npm run dev
```

5. **Acessar o Projeto:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Implantação e Build

Para gerar a versão otimizada pronta para produção:

```bash
npm run build
```

Para testar o build gerado localmente em modo de produção:

```bash
npm run start
```

### Deploy na Vercel
Este repositório está configurado para integração contínua com a Vercel. Qualquer alteração aprovada no branch principal do repositório do GitHub atualizará automaticamente a versão em produção disponível no endereço oficial do projeto.

---

## 🔧 Customização

* **Atualização do Catálogo:** Para adicionar, editar ou remover itens do catálogo, altere o arquivo `produtos.json` localizado na raiz do projeto. Garanta que a tipagem dos atributos de cada objeto inserido coincida com as definições de tipo do projeto.
* **Informações de Contato:** Endereços, e-mails e links sociais podem ser personalizados diretamente no componente `src/components/footer.tsx` e na rota correspondente em `src/app/contato/page.tsx`.

---

## 📄 Licença

Este projeto é disponibilizado sob a Licença MIT. Sinta-se à vontade para utilizá-lo e adaptá-lo de acordo com as diretrizes descritas no arquivo de licença do repositório.