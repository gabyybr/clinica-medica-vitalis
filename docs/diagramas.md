# 📊 Diagrama de Caso de Uso e Diagrama de Classes

## Caso de Uso

Atores principais:
- **Administrador**
- **Médico**
- **Paciente**

Casos de uso:
- Cadastrar usuários  
- Agendar consulta  
- Registrar atendimento  
- Emitir relatório  
- Gerenciar pagamentos  
- Consultar histórico do paciente  
- Enviar notificações  

Crie este diagrama em [https://app.diagrams.net/](https://app.diagrams.net/).

---

## Diagrama de Classes

Classes sugeridas:
- **Paciente** (id, nome, cpf, telefone, email, dataNascimento)  
- **Medico** (id, nome, crm, especialidade, telefone, email)  
- **Consulta** (id, data, hora, status, idMedico, idPaciente)  
- **Prontuario** (id, descricao, data, idPaciente)  
- **Pagamento** (id, valor, tipo, status, idConsulta)  
- **Administrador** (id, nome, login, senha)

Relacionamentos:
- Um médico pode atender várias consultas.  
- Um paciente pode ter vários prontuários.  
- Uma consulta está ligada a um médico e um paciente.  
