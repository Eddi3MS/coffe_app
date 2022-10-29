## Projeto proposto no ignite da Rocketseat

Construí o sistema utilizando:

- React.Js
- Typescript
- Vite (modules)
- Context API
- Nookies (para salvar o endereço)
- Styled Components (CSS in JS)
- React Hook Form + Yup (validações no formulário)
- React Hot Toast (toasts - popups informativos)

- Integração com o firebase/firestore para feedback em realtime do status do pedido. (no seu não vai funcionar porque o Café esta sem funcionarios 😥)


## Rodando o Projeto:

- pra rodar o projeto localmente, basta baixar ou clonar o repositorio e instalar as dependencias
```
  yarn -E
  
```



- para integrar a loja ao seu firebase, dentro da pasta src crie uma pasta chamada libs e dentro dela crie um arquivo chamado firebase.ts.

- Dentro do arquivo firebase.ts, você deve colar suas chaves do firebase como na imagem abaixo e usar..

![image](https://user-images.githubusercontent.com/75024157/185769403-eb5d570a-473b-4ec4-a945-97e17011e022.png)


![image](https://user-images.githubusercontent.com/75024157/185762604-2011e568-486b-4007-8fc5-a829f49b9be8.png)

## Aproveitei a implementação com o firestore, e criei uma pagina para gerenciar os pedidos, num modelo Kanban: a medida que o pedido evolui o status, ele avança as colunas.

![image](https://user-images.githubusercontent.com/75024157/198832568-31b62e22-94ec-4f77-bb0b-e1bfe38fae0b.png)

## ADmin Login e proteção de rotas adicionado

![image](https://user-images.githubusercontent.com/75024157/186152954-561126dd-2176-4229-b627-c1bf6bdbb26b.png)


