const BASE_URL = "http://localhost:8888";
let TOKEN;

function _buildHeaders(optins = {}) {
  const token = TOKEN;
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { "x-auth-token": `Bearer ${token}` } : {}),
    ...optins
  };
}

export const bootstrap = () => {
  let token;
  let usuario;
  if (sessionStorage.getItem("auth-token")) {
    token = sessionStorage.getItem("auth-token");
  }
  console.log("session", sessionStorage.getItem("auth-user"));
  if (sessionStorage.getItem("auth-user")) {
    try {
      usuario = JSON.parse(sessionStorage.getItem("auth-user"));
    } catch (e) {
      usuario = undefined;
    }
  }
  TOKEN = token;
  return { token, usuario };
};

export const logout = () => {
  sessionStorage.removeItem("auth-user");
  sessionStorage.removeItem("auth-user");
};

export const logar = (login, senha) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login,
      senha
    })
  })
    .then(response => {
      if (response.status === 500) {
        throw new Error();
      }

      return response.json();
    })
    .then(json => {
      console.log({ json });
      sessionStorage.setItem("auth-token", json.token);
      sessionStorage.setItem("auth-user", JSON.stringify(json.usuario));
      TOKEN = json.token;
      return json;
    });
};

export const fetchFotos = login => {
  console.log(login);
  if (!login)
    return fetch(`${BASE_URL}/api/fotos`, {
      method: "GET",
      headers: _buildHeaders()
    }).then(response => response.json());
  return fetch(`${BASE_URL}/api/fotos/usuario/${login}`, {
    headers: _buildHeaders()
  }).then(response => response.json());
};

export const curtirFoto = fotoId =>
  fetch(`${BASE_URL}/api/fotos/${fotoId}/curtida`, {
    method: "GET",
    headers: _buildHeaders()
  }).then(response => response.json());

export const comentarFoto = (fotoId, comentario) =>
  fetch(`${BASE_URL}/api/fotos/${fotoId}/comentario`, {
    method: "POST",
    headers: _buildHeaders(),
    body: JSON.stringify({ texto: comentario })
  }).then(response => response.json());
