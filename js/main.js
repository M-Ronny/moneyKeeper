document.querySelector('button').addEventListener('click', submit)
const myBalance = document.querySelector('.myBalance')
const from = document.querySelector('.for')

function submit() {
  const option = document.querySelector('select').value
  const amount = document.querySelector('.amount').value

  if (option === 'income') {
    myAccount.income(Number(amount))
    myAccount.history(`+$${amount}`)
  } else if (option === 'expense') {
    myAccount.expesne(Number(amount))
    myAccount.history(`-$${amount}`)
  }
}

class Account {
  constructor(current) {
    this.current = current
  }

  income(number) {
    this.current += number
    myBalance.textContent = `$${this.current}` 
  }

  expesne(number) {
    this.current -= number
    myBalance.textContent = `$${this.current}` 
  }

  history(earnOrSpent) {
    const history = document.querySelector('.history')
    const p = document.createElement('p')

    p.textContent = `${from.value.toUpperCase()}: ${earnOrSpent}`
    history.append(p)
  }
}

 const myAccount = new Account(0)