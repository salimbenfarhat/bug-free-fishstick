self.addEventListener("install", (event) => {
  // Actions à effectuer lors de l'installation du Service Worker
  console.log("Le Service Worker a été installé");
});

self.addEventListener("activate", (event) => {
  // Actions à effectuer lors de l'activation du Service Worker
  console.log("Le Service Worker a été activé");
});

self.addEventListener("fetch", (event) => {
  // Intercepter et gérer les requêtes réseau
  console.log("Une requête réseau a été interceptée : ", event.request);
});
