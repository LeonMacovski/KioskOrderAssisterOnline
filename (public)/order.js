class Order
{
    constructor(orderer)
    {
        this.orderer = orderer
        this.items = {}
    }

    print()
    {
        for(var i in this.items)
        {
            console.log(i + ' ' + this.items[i])
        }
    }

    get all_items()
    {
        return this.items
    }

    get name()
    {
        return this.orderer
    }

    get price()
    {
        var sum = 0
        for(var item in this.items)
            sum += this.items[item][1]
        
        return sum
    }

    add(item, quantity)
    {
        this.items[item] = quantity
    }
    
}