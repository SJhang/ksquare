import $ from 'jquery';

export const fetchUsers = (success, error) => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    success,
    error
  })
}
