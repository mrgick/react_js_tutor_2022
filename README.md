# ДЗ:
- Требуется перевести весь проект в функциональный компонент
- после реализации функционального компонента требуется создать новый компонент со списком пользователей
- реализовать переход по страницам ( переход на страницу Todo - будет отображать весь список Todo, переход на страницу пользователей - будет отображать список пользователей, при нажатии на пользователя следует отображать Todo лист конкретного пользователя ( можно использовать [].filter() где todos.userId ==  user.id 
- реализовать общий кастомный хук useFetchdata, в который будет передаваться todos/users и в зависимости от вызова будет возвращать либо список todos либо список пользователей, вызов данного хука будет производиться с компонентов Todo ( useFetchdata('todos') ) и Users ( useFetchdata('users') ) 