var menu = [
    {
      "Name": "City Burger",
      "Prices": {
        "a": 160
      }
    },
    {
      "Name": "Hamburger",
      "Prices": {
        "Small": 110,
        "Medium": 150,
        "Large": 170
      }
    },
    {
      "Name": "Mexico Burger",
      "Prices": {
        "Small": 210,
        "Large": 290
      }
    },
    {
      "Name": "Kiosk Burger",
      "Prices": {
        "Small": 150,
        "Medium": 180,
        "Large": 200
      }
    },
    {
      "Name": "Chimichurri Burger",
      "Prices": {
        "a": 210
      }
    },
    {
      "Name": "Double Cheddar Burger",
      "Prices": {
        "a": 260
      }
    },
    {
      "Name": "Umami Burger",
      "Prices": {
        "a": 310
      }
    },
    {
      "Name": "Vegi Burger",
      "Prices": {
        "a": 160
      }
    },
    {
      "Name": "Vegi Wrap",
      "Prices": {
        "a": 170
      }
    },
    {
      "Name": "Chicken Steak",
      "Prices": {
        "Small": 110,
        "Large": 150
      }
    },
    {
      "Name": "Chicken Crispy",
      "Prices": {
        "Small": 130,
        "Large": 170
      }
    },
    {
      "Name": "Chicken City Burger",
      "Prices": {
        "a": 160
      }
    },
    {
      "Name": "Chicken Burger",
      "Prices": {
        "a": 170
      }
    },
    {
      "Name": "Italian Burger",
      "Prices": {
        "a": 200
      }
    },
    {
      "Name": "Beef Wrap",
      "Prices": {
        "a": 180
      }
    },
    {
      "Name": "Chicken Wrap",
      "Prices": {
        "a": 170
      }
    },
    {
      "Name": "Crispy Wrap",
      "Prices": {
        "a": 190
      }
    },
    {
      "Name": "Mexico Wrap",
      "Prices": {
        "a": 240
      }
    },
    {
      "Name": "Tuna Wrap",
      "Prices": {
        "a": 200
      }
    },
    {
      "Name": "Fries",
      "Prices": {
        "Normal": 50,
        "Baked": 60,
        "Seasoned": 70
      }
    },
    {
      "Name": "Fried Onions",
      "Prices": {
        "a": 90
      }
    },
    {
      "Name": "Chicken Nuggets",
      "Prices": {
        "a": 100
      }
    },
    {
      "Name": "Bacon",
      "Prices": {
        "a": 50
      }
    },
    {
      "Name": "Aidamer Cheese",
      "Prices": {
        "a": 30
      }
    },
    {
      "Name": "Cheddar Cheese",
      "Prices": {
        "a": 40
      }
    },
    {
      "Name": "Caramelized Onions",
      "Prices": {
        "a": 30
      }
    },
    {
      "Name": "Guacamole",
      "Prices": {
        "a": 50
      }
    },
    {
      "Name": "Jalapeno Peppers",
      "Prices": {
        "a": 60
      }
    },
    {
      "Name": "Beef Salad",
      "Prices": {
        "a": 220
      }
    },
    {
      "Name": "Chicken Salad",
      "Prices": {
        "a": 200
      }
    },
    {
      "Name": "Crispy Salad",
      "Prices": {
        "a": 200
      }
    },
    {
      "Name": "Tuna Salad",
      "Prices": {
        "a": 220
      }
    }
  ]
 
var sizes = {}

menu.forEach(item => {
  sizes[item['Name']] = 0
  item['Selected'] = Object.keys(item['Prices'])[0]
});

const item_list = document.querySelector('.items-list')

var orders = []

menu.forEach(item => {
  list_length = Object.keys(item['Prices']).length
  var li = document.createElement('li')

  var div1 = document.createElement('div')
  div1.classList.add('item')
  var h1_1 = document.createElement('h1')
  h1_1.classList.add('item-name')
  var div2 = document.createElement('div')
  div2.classList.add('price-container')
  var h1_2 = document.createElement('h1')
  h1_2.classList.add('item-price')
  h1_2.classList.add(item['Name'].replaceAll(' ', ''))
  var button1 = document.createElement('button')
  button1.classList.add('plus')
  var button2 = document.createElement('button')
  button2.classList.add('minus')
  var h1_3 = document.createElement('h1')
  h1_3.classList.add('quantity')

  button1.innerHTML = '+'
  button2.innerHTML = '-'
  h1_1.innerHTML = item['Name']
  h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[0]]
  h1_3.innerHTML = sizes[item['Name']]
  button1.addEventListener('click', () => {
    sizes[item['Name']]++
    h1_3.innerHTML = sizes[item['Name']]
  })

  button2.addEventListener('click', () => {
    sizes[item['Name']]--
    if(sizes[item['Name']] == -1)
      sizes[item['Name']] = 0
    h1_3.innerHTML = sizes[item['Name']]
  })

  li.appendChild(div1)
  div1.appendChild(h1_1)
  if(list_length > 1)
  {
    var size_div = document.createElement('div')
    size_div.classList.add('size')

    if(list_length == 3)
    {
      var btn1 = document.createElement('button')
      btn1.classList.add('small')
      btn1.classList.add('selected')
      var btn2 = document.createElement('button')
      btn2.classList.add('medium')
      var btn3 = document.createElement('button')
      btn3.classList.add('large')
      Object.keys(item['Prices'])[0]
      btn1.innerHTML = Object.keys(item['Prices'])[0]
      btn2.innerHTML = Object.keys(item['Prices'])[1]
      btn3.innerHTML = Object.keys(item['Prices'])[2]

      btn1.addEventListener('click', () =>{
        btn1.classList.add('selected')
        btn2.classList.remove('selected')
        btn3.classList.remove('selected')
        h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[0]]
        item['Selected'] = btn1.innerHTML
      })
      btn2.addEventListener('click', () =>{
        btn2.classList.add('selected')
        btn1.classList.remove('selected')
        btn3.classList.remove('selected')
        h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[1]]
        item['Selected'] = btn2.innerHTML
      })
      btn3.addEventListener('click', () =>{
        btn3.classList.add('selected')
        btn2.classList.remove('selected')
        btn1.classList.remove('selected')
        h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[2]]
        item['Selected'] = btn3.innerHTML
      })
      
      size_div.appendChild(btn1)
      size_div.appendChild(btn2)
      size_div.appendChild(btn3)
    }

    if(list_length == 2)
    {
      var btn1 = document.createElement('button')
      btn1.classList.add('small')
      btn1.classList.add('selected')
      var btn3 = document.createElement('button')
      btn3.classList.add('large')
      btn1.innerHTML = Object.keys(item['Prices'])[0]
      btn3.innerHTML = Object.keys(item['Prices'])[1]

      btn1.addEventListener('click', () =>{
        btn1.classList.add('selected')
        btn3.classList.remove('selected')
        h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[0]]
        item['Selected'] = btn1.innerHTML
      })
      btn3.addEventListener('click', () =>{
        btn3.classList.add('selected')
        btn1.classList.remove('selected')
        h1_2.innerHTML = item['Prices'][Object.keys(item['Prices'])[1]]
        item['Selected'] = btn3.innerHTML
      })

      size_div.appendChild(btn1)
      size_div.appendChild(btn3)
    }
    

    div1.appendChild(size_div)
  }
  div1.appendChild(div2)
  div2.appendChild(h1_2)
  div2.appendChild(button1)
  div2.appendChild(h1_3)
  div2.appendChild(button2)

  item_list.appendChild(li)
});

const order_btn = document.querySelector('.add-order')

order_btn.addEventListener('click', () => {
  add_order()
})

function add_order()
{
  var name = document.querySelector('.search').value
  if(name == "")
    return

  if(!Object.values(sizes).some(x => x != 0))
    return
  
  var curr_order = new Order(name)
  
  for(s in sizes)
  {
    if(sizes[s] != 0)
    {
      curr_obj = menu.find(x => x['Name'] == s)
      if(curr_obj['Selected'] == 'a')
        curr_order.add(s, [sizes[s], curr_obj['Prices'][curr_obj['Selected']] * sizes[s]])
      else
        curr_order.add(curr_obj['Selected'] + ' ' + s, [sizes[s], curr_obj['Prices'][curr_obj['Selected']] * sizes[s]])
    }
  }
  
  var users_list = document.querySelector('.users-list')
  var li = document.createElement('li')
  li.classList.add('user-item')
  var div = document.createElement('div')
  div.classList.add('user-container')
  var h1_name = document.createElement('h1')
  h1_name.classList.add('name')
  var h1_pay = document.createElement('h1')
  h1_pay.classList.add('pay')
  var remove_btn = document.createElement('button')
  remove_btn.classList.add('remove')
  h1_name.innerHTML = curr_order.name
  h1_pay.innerHTML = curr_order.price
  remove_btn.innerHTML = 'X'
  orders.push(curr_order)
  div.appendChild(h1_name)
  div.appendChild(h1_pay)
  div.appendChild(remove_btn)
  li.appendChild(div)
  users_list.appendChild(li)
  remove_btn.addEventListener('click', function()
  {
    console.log(h1_name.innerHTML)
    let index = orders.indexOf(orders.find(x => x.name == h1_name.innerHTML))
    orders.splice(index, 1)
    remove_btn.parentElement.parentElement.remove()
    var sum = 0
    for(var o of orders)
      sum += o.price
    document.querySelector('.total').innerHTML = 'Total: ' + sum
    update_order()
  })

  

  var sum = 0
  for(var o of orders)
    sum += o.price

  document.querySelector('.total').innerHTML = 'Total: ' + sum

  update_order()
  reset_menu()
}

function reset_menu()
{
  document.querySelector('.search').value = ''
  menu.forEach(item => {
    sizes[item['Name']] = 0
    item['Selected'] = Object.keys(item['Prices'])[0]
    document.querySelectorAll('.small').forEach(x => x.classList.add('selected'))
    document.querySelectorAll('.medium').forEach(x => x.classList.remove('selected'))
    document.querySelectorAll('.large').forEach(x => x.classList.remove('selected'))
    document.querySelectorAll('.quantity').forEach(x => x.innerHTML = 0)
    menu.forEach(m => {
      var selecor = m['Name'].replaceAll(' ', '')
      document.querySelector('.' + selecor).innerHTML = Object.values(m['Prices'])[0]
    });
  });
  
}

function update_order()
{
  text = document.querySelector('.order-string')
  order_string = ''
  order_dict = {}
  orders.forEach(o => {
    for(item in o.all_items)
    {
      if(item in order_dict)
        order_dict[item] += o.all_items[item][0]
      else
        order_dict[item] = o.all_items[item][0]
    }
  });

  for(temp_order in order_dict)
    order_string += order_dict[temp_order] + 'x ' + temp_order + ', '

  order_string = order_string.substring(0, order_string.length - 2)
  text.innerHTML = order_string
}