import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        email: 'ibrahim@gmail.com',
        password: '123456'
      },
      {
        email: 'test@test.com',
        password: '123123'
      }
    ],
    loggedIn: false,
    items: [
      {
        name: 'Falafel',
        description: 'Syrian Falafel',
        imgUrl: 'https://kitchen.sayidaty.net/uploads/small/47/47bc7303629287029bc155f156aafd18_w750_h500.jpg',
        ingredients: [
          {
            type: 'Hommos',
            quantity: 2
          },
          {
            type: 'Tomatoes',
            quantity: 1
          }
        ]
      },
      {
        name: 'Chicken Shawerma',
        description: 'Syrian Food',
        imgUrl: 'https://www.ndtv.com/cooks/images/shawarma%20new.jpg',
        ingredients: [
          {
            type: 'Chicken',
            quantity: 1
          },
          {
            type: 'Onion',
            quantity: 1
          },
          {
            type: 'Potatoes',
            quantity: 2
          }
        ]
      },
      {
        name: 'Falafel',
        description: 'Syrian Falafel',
        imgUrl: 'https://kitchen.sayidaty.net/uploads/small/47/47bc7303629287029bc155f156aafd18_w750_h500.jpg',
        ingredients: [
          {
            type: 'Hommos',
            quantity: 2
          },
          {
            type: 'Tomatoes',
            quantity: 1
          }
        ]
      },
      {
        name: 'Chicken Shawerma',
        description: 'Syrian Food',
        imgUrl: 'https://www.ndtv.com/cooks/images/shawarma%20new.jpg',
        ingredients: [
          {
            type: 'Chicken',
            quantity: 1
          },
          {
            type: 'Onion',
            quantity: 1
          },
          {
            type: 'Potatoes',
            quantity: 2
          }
        ]
      },
      {
        name: 'Falafel',
        description: 'Syrian Falafel',
        imgUrl: 'https://kitchen.sayidaty.net/uploads/small/47/47bc7303629287029bc155f156aafd18_w750_h500.jpg',
        ingredients: [
          {
            type: 'Hommos',
            quantity: 2
          },
          {
            type: 'Tomatoes',
            quantity: 1
          }
        ]
      },
      {
        name: 'Chicken Shawerma',
        description: 'Syrian Food',
        imgUrl: 'https://www.ndtv.com/cooks/images/shawarma%20new.jpg',
        ingredients: [
          {
            type: 'Chicken',
            quantity: 1
          },
          {
            type: 'Onion',
            quantity: 1
          },
          {
            type: 'Potatoes',
            quantity: 2
          }
        ]
      }
    ],
    shoppingList: [
      {
        type: 'Chicken',
        quantity: 1
      },
      {
        type: 'Onion',
        quantity: 1
      },
      {
        type: 'Potatoes',
        quantity: 2
      }
    ]
  },
  mutations: {
    newUser: (state, user) => (state.users.push(user)),
    logInorOut: (state, inOrOut) => (state.loggedIn = inOrOut),
    newItem: (state, item) => (state.items.push(item)),
    updateItem: (state, params) => (state.items[params.index] = params.item),
    removeItem: (state, params) => (state.items.splice(params.index, 1)),
    newShoppingItem: (state, item) => (state.shoppingList.unshift(item)),
    removeShoppingItem: (state, index) => (state.shoppingList.splice(index, 1))
  },
  getters: {
    allUsers: (state) => state.users,
    loggedIn: (state) => state.loggedIn,
    allItems: (state) => state.items,
    allShoppingItems: (state) => state.shoppingList
  },
  actions: {
    async addUser ({
      commit
    }, user) {
      commit('newUser', user)
    },
    async logInorOut ({
      commit
    }, inOrOut) {
      commit('logInorOut', inOrOut)
    },
    async addItem ({
      commit
    }, params) {
      // await Api().post('items', params)
      commit('newItem', params)
    },
    async updateItem ({
      commit
    }, params) {
      // await Api().put('/items/' + params._id, params)
      commit('updateItem', params)
    },
    async deleteItem ({
      commit
    }, params) {
      // await Api().delete('items/' + id);
      commit('removeItem', params)
    },
    async addShoppingItem ({
      commit
    }, item) {
      commit('newShoppingItem', item)
    },
    async deleteShoppingItem ({
      commit
    }, index) {
      commit('removeShoppingItem', index)
    }
  },
  modules: {
  }
})
