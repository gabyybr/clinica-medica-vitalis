import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Clínica Médica Vitalis',
  description: 'Documentação do Sistema de Gestão Clínica',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/gabbybr/clinica-medica-vitalis'
      }
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: 'Introdução – Minimundo', link: '/introducao' },
          { text: 'Descrição do Projeto', link: '/descricao' },
          { text: 'Funcionalidades Principais', link: '/funcionalidades' },
          { text: 'Diagramas de Caso de Uso e Classes', link: '/diagramas' },
          { text: 'Protótipos de Telas', link: '/prototipos' },
          { text: 'Cronograma e Entrega', link: '/cronograma' },
          { text: 'Riscos e Mitigação', link: '/riscos' },
          { text: 'Custos e Orçamento', link: '/custos' },
          { text: 'Considerações Finais', link: '/conclusao' }
        ]
      }
    ],

    footer: {
      message: 'Projeto acadêmico desenvolvido no IFSC Chapecó',
      copyright: '© 2025 Gabriely Ramos – Todos os direitos reservados'
    }
  }
});
