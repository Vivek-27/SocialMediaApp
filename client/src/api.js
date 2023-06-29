const data = [
  {
    id: 1,
    name: 'Alish Romen',
    username: 'alisharomen34',
    url: 'https://images.unsplash.com/photo-1687579521048-217e24217d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana'
  },
  {
    id: 2,
    name: 'Tania Deemo',
    username: 'taniademon3523',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://plus.unsplash.com/premium_photo-1681412205729-b9f005db9d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 3,
    name: 'Lana Rose',
    username: 'lana_rose231',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://images.unsplash.com/photo-1687561114733-8327806dea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 4,
    name: 'Mick Jackson',
    username: 'jackson_mick_devil',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 5,
    name: 'Alish Romen',
    username: 'alisharomen34',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    title: 'a person wearing black and white shoes standing next to a tree',
    url: 'https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 6,
    name: 'Alish Romen',
    username: 'alisharomen34',
    url: 'https://images.unsplash.com/photo-1687579521048-217e24217d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana'
  },
  {
    id: 7,
    name: 'Alish Romen',
    username: 'alisharomen34',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://plus.unsplash.com/premium_photo-1681412205729-b9f005db9d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 8,
    name: 'Alish Romen',
    username: 'alisharomen34',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://images.unsplash.com/photo-1687561114733-8327806dea82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60'
  },
  {
    id: 9,
    name: 'Alish Romen',
    username: 'alisharomen34',
    title: 'a group of people riding horses down a beach',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    url: 'https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 10,
    name: 'Alish Romen',
    username: 'alisharomen34',
    desc: 'Download this free HD photo of las terrenas, república dominicana, caballo corriendo and person in Las Terrenas, República Dominicana',
    title: 'a person wearing black and white shoes standing next to a tree',
    url: 'https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
];

export default data;
