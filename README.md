# 🚗 Calculadora de Emplacamento

![Preview do Projeto](./public/calculator-preview.png)

## 📋 Sobre o Projeto

**Calculadora de Emplacamento** é uma aplicação web completa e moderna desenvolvida para facilitar o cálculo de taxas de primeiro emplacamento, IPVA e documentação para **Carros** e **Motos**.

O projeto foi construído pensando na experiência do usuário, oferecendo:
- Cálculos precisos baseados em taxas reais (IPVA, honorários, placas, etc).
- Diferenciação automática entre Venda Direta e Estoque.
- Geração de orçamentos em PDF profissionais.
- Histórico local de cálculos.
- Funcionalidade completa Offline (PWA).

## ✨ Funcionalidades

### 🚙 Carros
- Cálculo de IPVA (2% Venda Direta / 1% Venda Estoque).
- Taxas configuráveis (Placa, Honorários, Alienação).
- Detalhamento mês a mês do IPVA proporcional.

### 🏍️ Motos
- Interface dedicada (Temática e regras específicas).
- Regra de negócio automática (Sempre Venda Estoque).
- Valores de taxas ajustados para motocicletas.

### 🛠️ Recursos Gerais
- **Histórico**: Salva automaticamente seus cálculos no navegador.
- **Exportação PDF**: Gere um documento profissional com um clique.
- **PWA (Progressive Web App)**: Instale o app no seu celular ou desktop.
- **SEO Otimizado**: Metadados avançados, Schema.org e Open Graph.
- **Design Responsivo**: Interface "Flat" moderna e adaptável a qualquer tela.
- **Modo Offline**: Funciona mesmo sem internet após o primeiro acesso.

## 🚀 Tecnologias Utilizadas

O projeto utiliza a stack mais moderna do ecossistema React:

- [Next.js 16](https://nextjs.org/) - O framework React para produção.
- [React 19](https://react.dev/) - Biblioteca para construção de interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática robusta.
- [Tailwind CSS](https://tailwindcss.com/) - Estilização utility-first.
- [Zustand](https://github.com/pmndrs/zustand) - Gerenciamento de estado leve e persistente.
- [jsPDF](https://github.com/parallax/jsPDF) - Geração de PDFs no client-side.
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones vetoriais.

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18.x ou superior.

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/eudanielhenrique/calculadora-next.git
   cd calculadora-next
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente (Opcional)**
   Crie um arquivo `.env.local` na raiz:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SEU-ID-AQUI
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

## 📱 PWA (Instalação)

Este projeto é um Progressive Web App. Você pode instalá-lo:
- **No Chrome/Edge**: Clique no ícone de instalação na barra de endereço.
- **No iOS (Safari)**: Toque em "Compartilhar" > "Adicionar à Tela de Início".
- **No Android**: Toque no menu > "Instalar aplicativo".

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/MinhaFeature`)
3. Faça o Commit (`git commit -m 'Adiciona: MinhaFeature'`)
4. Faça o Push (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 👤 Autor

**Daniel H**

- GitHub: [@eudanielhenrique](https://github.com/eudanielhenrique)
- LinkedIn: [phdanielhenrique](https://www.linkedin.com/in/phdanielhenrique/)
- Twitter: [@danielhenrique](https://twitter.com/danielhenrique)

---

Desenvolvido com 💙 por Daniel H.
