# 1. Introdução

O presente documento apresenta a visão geral do sistema **Clínica Médica Vitalis**, detalhando sua finalidade, objetivos, público-alvo, escopo e elementos estratégicos essenciais para o desenvolvimento do software. Ele também reúne os principais artefatos de documentação, garantindo clareza e alinhamento entre todos os envolvidos no projeto.

## 1.1 Objetivo

O objetivo deste documento é descrever, de forma clara e organizada, as diretrizes do projeto, incluindo funcionalidades centrais, requisitos, stakeholders, modelos UML e protótipos. O intuito é servir como referência para o desenvolvimento e evolução do sistema, assegurando que todas as partes interessadas compreendam o propósito e a abrangência do software.

## 1.2 Escopo

O sistema **Clínica Médica Vitalis** será uma plataforma voltada ao gerenciamento de atendimentos médicos, oferecendo funcionalidades para pacientes, médicos e administradores. O sistema permitirá agendamentos, acesso ao prontuário, visualização de exames, emissão de documentos e administração geral da clínica.  
O público-alvo inclui pacientes, médicos, equipe administrativa e demais colaboradores envolvidos nos processos clínicos.

## 1.3 Definições, Acrônimos e Abreviações

- **UML** – Unified Modeling Language (Linguagem de Modelagem Unificada)  
- **Paciente** – Usuário que acessa o sistema para agendar consultas e visualizar informações  
- **Administrador** – Responsável pelo gerenciamento geral da clínica  
- **Prontuário** – Registro completo do histórico clínico do paciente  

## 1.4 Público-Alvo

Este documento destina-se a:

- Desenvolvedores  
- Gerentes de projeto  
- Professores e avaliadores  
- Usuários finais envolvidos no processo  
- Especialistas de domínio  
- Stakeholders institucionais  

---

# 2. Descrição do Projeto

## 2.1 Visão Geral do Projeto

O sistema **Clínica Médica Vitalis** é projetado para melhorar o fluxo de atendimento médico, oferecendo uma plataforma moderna, intuitiva e integrada. Ele proporciona agendamento simplificado, acesso ao prontuário, gerenciamento de exames e comunicação entre pacientes e profissionais da saúde.

Este documento compila a visão completa do projeto, incluindo:  
✔ requisitos funcionais e não funcionais  
✔ stakeholders  
✔ diagrama de caso de uso  
✔ diagrama de classes  
✔ protótipos de telas  
✔ canvas estratégico  

---

## 2.1.1 Canvas do Projeto

O Canvas do Projeto apresenta uma visão estratégica da Clínica Médica Vitalis, englobando parceiros, infraestrutura, proposta de valor, recursos e custos operacionais.

### 📌 Canvas Visual  
*(Certifique-se de que o arquivo esteja em: `docs/imagens/canvas.png`)*

![Canvas do Projeto](./imagens/canvas.png)

---

## 2.2 Stakeholders

A seguir estão identificadas as partes interessadas do sistema e seus respectivos papéis:

- **Paciente** — Usuário principal do sistema; agenda consultas, visualiza prontuário e resultados de exames.  
- **Médico** — Responsável por registrar prontuário, emitir prescrições e acompanhar pacientes.  
- **Administrador da Clínica** — Garante o funcionamento da plataforma, gerencia usuários, médicos, especialidades e relatórios.  
- **Equipe Técnica de TI** — Responsável pela manutenção, hospedagem e suporte técnico do sistema.  
- **Laboratórios Parceiros** — Enviam resultados de exames e integram dados clínicos ao sistema.  
- **Equipe de Suporte ao Usuário** — Atende pacientes e médicos via chat e suporte 24/7.  
