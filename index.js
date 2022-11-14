const menu = {
    breakfast: [  
        {
            name: "Ackee & Saltfish",
            price: 800,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "This is our National dish for a reason."
        }, 
        {
            name: "Tripe & Bean",
            price: 710,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "Tender pieces of beef tripe curried and seasoned."
        }, 
        {
            name: "Saltfish-Callaloo",
            price: 760,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "Callaloo is delicious Jamaican greens."
        }, 
        {
            name: "Cow Foot",
            price: 770,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "This traditional authentic Jamaican meal is seasoned to perfection."
        }, 
        {
            name: "Mackerel",
            price: 680,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "Salt mackerel sauteed with onions and peppers."
        }, 
        {
            name: "Liver",
            price: 600,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "Tender Jamaican brown stewed liver, very succulent."
        }, 
        {
            name: "Mackerel Rundown",
            price: 800,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "This traditional authentic Jamaican meal will have you running back for more!"
        }, 
        {
            name: "Stew Chicken",
            price: 700,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "Classic choice!"
        }, 
        {
            name: "Cornmeal Porridge",
            price: 430,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "A Yardie style breakfast"
        }, 
        {
            name: "Oats Porridge",
            price: 430,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "A Yardie style breakfast"
        }, 
        {
            name: "Peanut Porridge",
            price: 430,
            comment_type: "D",
            prepared: [],
            options: ["regular", "large"],
            desc: "A Yardie style breakfast of champions"
        }, 

    ],
    lunch: {
        entrees: [
            {
                name: "Fried Chicken",
                price: 680,
                comment_type: "a",
                prepared: ["flour", "salt", "egg", "chicken seasoning"],
                options: ['Would you like  it fried with bread crumbs instead of flour?'],
                desc: "Succulent fried chicken that is seasoned to perfection.",
                img: "",
            },
            {
                name: "Jerk Chicken",
                price: 850,
                comment_type: "a",
                prepared: ["salt", "jerk seasoning"],
                options: ['irie', "mild",  "hot", "wtf"],
                desc: "Our tasty and spicy jerk chicken is marinated with love.",
                special: true,
            },
            {
                name: "Brown Stew Chicken",
                price: 810,
                comment_type: "a",
                prepared: ["salt", "chicken seasoning", "soy sauce"],
                options: ["kids", "regular", "large"],
                desc: "This Deeply flavorful, rich and down right addictive."
            },
            {
                name: "Curry Chicken",
                price: 810,
                comment_type: "a",
                prepared: ["salt", "chicken seasoning", "soy sauce"],
                options: ["honey","kids","regular", "large"],
                desc: "Tender pieces of chicken that has been marinated."
            },
            {
                name: "Oxtail",
                price: 950,
                comment_type: "d",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "Marinated with all the right seasonings then braised."
            },
            {
                name: "Ackee AND Saltfish",
                price: 900,
                comment_type: "AcSf",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This is our National dish for a reason!"
            },
            {
                name: "Escovitch Fish",
                price: 700,
                comment_type: "b",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This authentic Jamaican seafood recipe is savory & tangy."
            },
            {
                name: "Brown Stew Fish",
                price: 700,
                comment_type: "b",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "Freshly caught Snapper seasoned with salt and black pepper."
            },
            {
                name: "Famous Stew Peas",
                price: 750,
                comment_type: "",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This Jamaican traditional dish is made with smoked turkey."
            },
        ],
    },
    dinner: {
        entrees: [
            {
                name: "Fried Chicken",
                price: 880,
                comment_type: "a",
                prepared: ["flour", "salt", "egg", "chicken seasoning"],
                options: ['Would you like  it fried with bread crumbs instead of flour?'],
                desc: "Succulent fried chicken that is seasoned to perfection.",
                img: "",
            },
            {
                name: "Jerk Chicken",
                price: 1050,
                comment_type: "a",
                prepared: ["salt", "jerk seasoning"],
                options: ['irie', "mild",  "hot", "wtf"],
                desc: "Our tasty and spicy jerk chicken is marinated with love."
            },
            {
                name: "Brown Stew Chicken",
                price: 1010,
                comment_type: "a",
                prepared: ["salt", "chicken seasoning", "soy sauce"],
                options: ["kids", "regular", "large"],
                desc: "This Deeply flavorful, rich and down right addictive."
            },
            {
                name: "Curry Chicken",
                price: 1010,
                comment_type: "a",
                prepared: ["salt", "chicken seasoning", "soy sauce"],
                options: ["honey","kids","regular", "large"],
                desc: "Tender pieces of chicken that has been marinated."
            },
            {
                name: "Oxtail",
                price: 1350,
                comment_type: "d",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "Marinated with all the right seasonings then braised."
            },
            {
                name: "ACKEE AND SALTFISH!!",
                price: 1100,
                comment_type: "AcSf",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This is our National dish for a reason!",
                special: true,
            },
            {
                name: "Escovitch Fish",
                price: 900,
                comment_type: "b",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This authentic Jamaican seafood recipe is savory & tangy."
            },
            {
                name: "Brown Stew Fish",
                price: 900,
                comment_type: "b",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "Freshly caught Snapper seasoned with salt and black pepper."
            },
            {
                name: "Famous Stew Peas",
                price: 950,
                comment_type: "",
                prepared: [""],
                options: ["kids","regular", "large"],
                desc: "This Jamaican traditional dish is made with smoked turkey."
            },
        ],
    },
    sides: [
        {
            name: "Fries",
            price: 270,
            comment_type: "c",
            prepared: ["Regular Potatoes", "Sweet Potatoes"],
            options: ["kids","medium", "large"],
            desc: "Classic!"
        },
        {
            name: "Ripe Plantains",
            price: 200,
            comment_type: "c",
            prepared: ["salt"],
            options: ["kids","medium", "large"],
            desc: "Sweet fried ripe plantains."
        },
        {
            name: "Jamaican Patties",
            price: 275,
            comment_type: "c",
            prepared: [],
            options: ["medium", "large"],
            desc: "Flakey and delicious flour crust with savory meat"
        },
        {
            name: "Coco Bread",
            price: 155,
            comment_type: "c",
            prepared: [],
            options: [],
            desc: "Soft Coco bread baked to perfection. "
        },
        {
            name: "Festivals",
            price: 200,
            comment_type: "c",
            prepared: [],
            options: [],
            desc: "Soft cornmeal festivals made with love."
        },
        {
            name: "Rice & Peas",
            price: 190,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Authentic Jamaican rice & peas, made with fresh coconut milk."
        },
        {
            name: "Mac & Cheese",
            price: 260,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Baked homemade macaroni and cheese. It's super delicious, slightly crispy on the outside and loaded."
        },
        {
            name: "Coleslaw",
            price: 270,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Sweet handmade coleslaw, made to perfection with all the freshest ingredients, cabbage, carrots no dairy."
        },

    ],
    bf_sides: [
        {
            name: "Fried Dumplins",
            price: 270,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Soft fried dumplins made by experts."
        },
        {
            name: "Green Bananas",
            price: 290,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Boiled green bananas, good source of iron."
        },
        {
            name: "Yellow Yam",
            price: 470,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Jamican yellow yam, guarantee you will not find it anywhere else."
        },
        {
            name: "Boiled Dumplins",
            price: 370,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Soft fried dumplins made by experts."
        },
        {
            name: "Roast Breadfruit",
            price: 470,
            comment_type: "c",
            prepared: [],
            options: ["kids","medium", "large"],
            desc: "Breadfruit roasted to perfection."
        },

    ]
}


autoMenu = () => {
    const bf = menu.breakfast.reverse();
    const lh = menu.lunch.entrees.reverse();
    const dr = menu.dinner.entrees;
    const sides = menu.sides.concat(menu.bf_sides.reverse());


    const bfBtn = document.createElement('button');
    bfBtn.innerHTML = "BREAKFAST";
    const lhBtn = document.createElement('button');
    lhBtn.innerHTML = "LUNCH";
    const drBtn = document.createElement('button');
    drBtn.innerHTML = "DINNER";
    const sidesBtn = document.createElement('button');
   sidesBtn.innerHTML = "SIDES";

    const menu_opts_wrapper = document.createElement("div");
    menu_opts_wrapper.style.display = "flex";
    bfBtn.style.margin = "10px";
    lhBtn.style.margin = "10px";
    drBtn.style.margin = "10px";
    sidesBtn.style.margin = "10px";
    menu_opts_wrapper.appendChild(bfBtn);
    menu_opts_wrapper.appendChild(lhBtn);
    menu_opts_wrapper.appendChild(drBtn);
    menu_opts_wrapper.appendChild(sidesBtn);

    const doc = window.document.createDocumentFragment("html")
    // window.document.body = ""
    document.body.innerHTML = ""
    const contentDiv = document.createElement("div");
    contentDiv.style.padding = "10px"

    const headButtonDiv = document.createElement("div");
    headButtonDiv.style.display = "flex";
    const jaCurrBtn = document.createElement("button");
    const usCurrBtn = document.createElement("button");
    jaCurrBtn.style.marginLeft = "15px";
    usCurrBtn.style.marginLeft = "5px";
    jaCurrBtn.style.height = "25px";
    usCurrBtn.style.height = "25px";
    jaCurrBtn.style.fontSize = "15px";
    usCurrBtn.style.fontSize = "15px";
    jaCurrBtn.innerHTML = "🇯🇲$";
    usCurrBtn.innerHTML = "🇺🇸$";

    headButtonDiv.appendChild(jaCurrBtn);
    headButtonDiv.appendChild(usCurrBtn);

    const headDiv = document.createElement("div");
    headDiv.style.display = "flex";
    const headTitle = document.createElement("h1");
    headTitle.innerHTML = "Kool Runnings Resturant";
    headDiv.appendChild(headTitle)


    const messDiv = document.createElement("div");
    messDiv.style.marginTop = "15px";
    const messTitle = document.createElement("h5");
    messTitle.innerHTML = "Welcome to Kool Runnings Restaurant. <br/>My name is Oayta Bot, and I'll be serving you today. <br/> Please select from the options above to view menu items.";
    messDiv.appendChild(messTitle)


    const dinnDiv = document.createElement("div");
    const dinnTitle = document.createElement("h3");
    dinnTitle.innerHTML = "Dinner<br/>Comes with 2 sides.";
    dinnDiv.appendChild(dinnTitle)

    const luncDiv = document.createElement("div");
    const luncTitle = document.createElement("h3");
    luncTitle.innerHTML = "Lunch<br/>Comes with 1 side.";
    luncDiv.appendChild(luncTitle)

    const breaDiv = document.createElement("div");
    const breaTitle = document.createElement("h3");
    breaTitle.innerHTML = "Breakfast";
    breaDiv.appendChild(breaTitle)

    const sideDiv = document.createElement("div");
    const sideTitle = document.createElement("h3");
    sideTitle.innerHTML = "Sides";
    sideDiv.appendChild(sideTitle)


    const bf_list = document.createDocumentFragment();
    const lh_list = document.createDocumentFragment();
    const dr_list = document.createDocumentFragment();
    const sid_list = document.createDocumentFragment();

    const orderWrapper = document.createElement("div");
    const order_list = document.createElement("ol");
    const order_totalDiv = document.createElement("div");
    var ordering_meal = false;
    var ordering_from = false;
    var order_array = [];
    const orderTitle = document.createElement("h3");
    orderTitle.innerHTML = "Your Order : ";

    // const useSides = ordering_from === "bk"? menu.bf_sides.reverse() : sides;


    bf.forEach(entree => {
        const addItem = document.createElement('button');
        const image = document.createElement("img");
        let img = entree.img? entree.img: "";
        image.src = img;
        image.alt = "Image";
        // image.style.width = "30px";
        // image.style.height = "30px";
        let name = entree.name;
        addItem.innerHTML = `Order ${name} `;
        let price = entree.price;
        let desc = entree.desc;
        const item = `${name} <br/> 🇯🇲$${price}   ||   🇺🇸$${(price/160).toFixed(2)}<br/>`
        
        const botMessDiv = document.createElement("div");
        const intro = entree.special? "Today's Breakfast Special! " : "Great Choice! ";
        const mess_Title = document.createElement("h5");
        mess_Title.innerHTML = `Oayta Bot : ${name} ${intro} ${desc} The price for this entree is $${price}. Breakfast comes with 1 side. <br/> Please select Side`;
        botMessDiv.appendChild(mess_Title)

        const li = document.createElement("li");
        li.style.paddingBottom = "10px";
        li.style.marginBottom = "20px";
        li.style.display = "flex";
        addItem.style.marginLeft = "40px";
        addItem.style.height = "30px";
        li.appendChild(image)
        li.innerHTML = item;
        li.appendChild(addItem)
        bf_list.appendChild(li)

        addItem.onclick = function() {
            window.scrollTo(0,0);
            ordering_meal = true;
            order_array.push(entree)
            const or_li = document.createElement("li");
            const itemDiv = document.createElement("div");
            itemDiv.style.display = "flex";
            const itemNameDiv = document.createElement("div");
            const itemPriceDiv = document.createElement("div");
            itemNameDiv.innerHTML = `${name}`;
            itemPriceDiv.innerHTML = `${price}`;
            itemPriceDiv.style.marginLeft = "30px";
            itemDiv.append(itemNameDiv);
            itemDiv.append(itemPriceDiv);
            or_li.appendChild(itemDiv);

            contentDiv.innerHTML = ""
            contentDiv.appendChild(headDiv);
            contentDiv.appendChild(botMessDiv);
            contentDiv.appendChild(sideDiv);
            // contentDiv.appendChild(orderTitle);

            document.body.appendChild(contentDiv);
        };
    })
        breaDiv.appendChild(bf_list)


    lh.forEach(entree => {
        const addItem = document.createElement('button');
        const image = document.createElement("img");
        let special = entree.special? "<br/>📣 Today's Special 🍽" : "";
        let img = entree.img? entree.img: "";
        image.src = img;
        image.alt = "Image";
        // image.style.width = "30px";
        // image.style.height = "30px";
        let name = entree.name;
        addItem.innerHTML = `Order - ${name}`;
        let price = entree.price;
        let desc = entree.desc;
        const item = `${name} ${special} <br/> 🇯🇲$${price}   ||   🇺🇸$${(price/160).toFixed(2)}<br/>`
         
        const botMessDiv = document.createElement("div");
        const intro = entree.special? "Today's Lunch Special! " : "Great Choice! ";
        const mess_Title = document.createElement("h5");
        mess_Title.innerHTML = `Oayta Bot : ${name} ${intro} ${desc} The price for this entree is $${price}. Lunch comes with 1 side. <br/> Please select Side`;
        botMessDiv.appendChild(mess_Title)

        const li = document.createElement("li");
        li.style.paddingBottom = "10px";
        li.style.marginBottom = "20px";
        li.style.display = "flex";
        addItem.style.marginLeft = "40px";
        addItem.style.height = "30px";
        li.appendChild(image)
        li.innerHTML = item;
        li.appendChild(addItem)
        lh_list.appendChild(li)

        addItem.onclick = function() {
            window.scrollTo(0,0);
            ordering_meal = true;
            order_array.push(entree)
            const or_li = document.createElement("li");
            const itemDiv = document.createElement("div");
            itemDiv.style.display = "flex";
            const itemNameDiv = document.createElement("div");
            const itemPriceDiv = document.createElement("div");
            itemNameDiv.innerHTML = `${name}`;
            itemPriceDiv.innerHTML = `${price}`;
            itemPriceDiv.style.marginLeft = "30px";
            itemDiv.append(itemNameDiv);
            itemDiv.append(itemPriceDiv);
            or_li.appendChild(itemDiv);

            contentDiv.innerHTML = ""
            contentDiv.appendChild(headDiv);
            contentDiv.appendChild(botMessDiv);
            contentDiv.appendChild(sideDiv);
            // contentDiv.appendChild(orderTitle);

            document.body.appendChild(contentDiv);
        };
    })
        luncDiv.appendChild(lh_list)


    dr.forEach(entree => {
        let addItem = document.createElement('button');
        let image = document.createElement("img");
        let special = entree.special? "<br/>📣 Today's Special 🍽" : "";
        let img = entree.img? entree.img: "";
        image.src = img;
        image.alt = "Image";
        // image.style.width = "30px";
        // image.style.height = "30px";
        let name = entree.name;
        addItem.innerHTML = `Order - ${name}`;
        let price = entree.price;
        let desc = entree.desc;
        const item = `${name} ${special} <br/> 🇯🇲$${price}   ||   🇺🇸$${(price/160).toFixed(2)}<br/>`;
        
        const botMessDiv = document.createElement("div");
        const intro = entree.special? "Today's Dinner Special! " : "Great Choice! ";
        const mess_Title = document.createElement("h5");
        mess_Title.innerHTML = `Oayta Bot : ${name} ${intro} ${desc} The price for this entree is $${price}. Dinner comes with 2 sides. <br/> Please select Sides`;
        botMessDiv.appendChild(mess_Title)

        const li = document.createElement("li");
        li.style.paddingBottom = "10px";
        li.style.marginBottom = "20px";
        li.style.display = "flex";
        addItem.style.marginLeft = "40px";
        addItem.style.height = "30px";
        li.appendChild(image)
        li.innerHTML = item;
        li.appendChild(addItem)
        dr_list.appendChild(li)
        addItem.onclick = function() {
            window.scrollTo(0,0);
            ordering_meal = true;
            order_array.push(entree)
            const or_li = document.createElement("li");
            const itemDiv = document.createElement("div");
            itemDiv.style.display = "flex";
            const itemNameDiv = document.createElement("div");
            const itemPriceDiv = document.createElement("div");
            itemNameDiv.innerHTML = `${name}`;
            itemPriceDiv.innerHTML = `${price}`;
            itemPriceDiv.style.marginLeft = "30px";
            itemDiv.append(itemNameDiv);
            itemDiv.append(itemPriceDiv);
            or_li.appendChild(itemDiv);

            contentDiv.innerHTML = ""
            contentDiv.appendChild(headDiv);
            contentDiv.appendChild(botMessDiv);
            contentDiv.appendChild(sideDiv);
            // contentDiv.appendChild(orderTitle);

            document.body.appendChild(contentDiv);
        };
    })
        dinnDiv.appendChild(dr_list)
    
   sides.forEach(entree => {
        const addItem = document.createElement('button');
        const image = document.createElement("img");
        let img = entree.img? entree.img: "";
        image.src = img;
        image.alt = "Image";
        // image.style.width = "30px";
        // image.style.height = "30px";
        let name = entree.name;
        addItem.innerHTML = `Add ${name} to Order`;
        let price = entree.price;
        let price_us = (price/160).toFixed(2)
        let desc = entree.desc;
        const item = `${name} <br/> 🇯🇲$${price}   ||   🇺🇸$${price_us}<br/>`;
        const item1 = `${name} <br/> <br/>`;

        const li = document.createElement("li");
        li.style.paddingBottom = "10px";
        li.style.marginBottom = "20px";
        li.style.display = "flex";
        addItem.style.marginLeft = "40px";
        addItem.style.height = "30px";
        li.appendChild(image)
        li.innerHTML = 
        li.innerHTML = ordering_from === "sides"|| ordering_from === false? item : item1;
        li.appendChild(addItem)
        sid_list.appendChild(li)


        addItem.onclick = function() {
            const order_sublist = document.createElement("ul");
            console.log("FROM Top :", ordering_from);
            let allowedSides = ordering_from === "dr"? 2 : 1;
            console.log("Allowed :", allowedSides);
            if(allowedSides > 1){
                const botMessDiv = document.createElement("div");
                const intro = entree.special? "Today's Special! " : "Nice Addition! One down, one more to go.";
                const mess_Title = document.createElement("h5");
                mess_Title.innerHTML = `Oayta Bot : ${name}, ${intro} ${desc}. <br/> Please select another side`;
                botMessDiv.appendChild(mess_Title)
                allowedSides = allowedSides - 1;
                console.log("Allowed Updated :", allowedSides);
                window.scrollTo(0,0);
                let newEntree = {
                    name: entree.name,
                    price: 0,
                    comment_type: entree.comment_type,
                    prepared: entree.prepared,
                    options: entree.options,
                    desc: entree.desc
                };
                newEntree.side = true;
                order_array.push(newEntree)

                contentDiv.innerHTML = ""
                contentDiv.appendChild(headDiv);
                contentDiv.appendChild(botMessDiv);
                contentDiv.appendChild(sideDiv);
                // contentDiv.appendChild(orderTitle);

                document.body.appendChild(contentDiv);
                ordering_from = true;
            }else{
                if(ordering_from === "sides"|| ordering_from === false){
                    order_array.push(entree)
                    console.log("PUSHING SIDE ONLY ******** : ", entree)
                    var botMessDiv = document.createElement("div");
                    const intro = "Great Choice! ";
                    const mess_Title = document.createElement("h5");
                    mess_Title.innerHTML = `Oayta Bot : ${name}, ${intro} ${desc} The price for this side is $${price}. <br/> Please select Sides`;
                    botMessDiv.appendChild(mess_Title)
                }else{
                    let newEntree = {
                        name: entree.name,
                        price: 0,
                        comment_type: entree.comment_type,
                        prepared: entree.prepared,
                        options: entree.options,
                        desc: entree.desc
                    }
                    newEntree.side = true;
                    order_array.push(newEntree);
                    console.log("PUSHING SIDE WITH MEAL ******** : ", newEntree)
                    var botMessDiv = document.createElement("div");
                    const intro = "Awsome! ";
                    const mess_Title = document.createElement("h5");
                    mess_Title.innerHTML = `Oayta Bot : ${name}, ${intro} ${desc}. <br/> Added to order.`;
                    botMessDiv.appendChild(mess_Title)
                    ordering_from = false;
                }
                window.scrollTo(0,0);
                var subTotal = subTotal? subTotal : 0;

                order_array.forEach(ord => {
                    let priA = isNaN(Number(ord.price))? 0 : Number(ord.price);
                    subTotal = subTotal + priA;
                    const or_li = document.createElement("li");
                    const itemDiv = document.createElement("div");

                    itemDiv.style.display = "flex";
                    // itemDiv.style.justifyContent = "space-evenly"
                    const itemNameDiv = document.createElement("div");
                    const itemPriceDiv = document.createElement("div");
                    const itemSpaceDiv = document.createElement("div");
                    itemNameDiv.innerHTML = ord.price === 0? `${ord.name} - with meal order`: `${ord.name}`;
                    itemPriceDiv.innerHTML = `$${ord.price}`;
                    itemSpaceDiv.innerHTML = `. . . . . . .`
                    // itemPriceDiv.style.marginLeft = "30px";
                    itemNameDiv.style.display = "flex";
                    itemNameDiv.style.justifyContent = "flex-start";
                    itemNameDiv.style.width = "300px";
                    // itemNameDiv.style.border = "1px solid black";
                    // itemPriceDiv.style.border = "1px solid green";
                    // itemSpaceDiv.style.border = "1px solid yellow";
                    itemSpaceDiv.style.width = "110px"
                    itemSpaceDiv.style.display = "flex"
                    itemSpaceDiv.style.justifyContent = "center"
                    itemDiv.append(itemNameDiv);
                    itemDiv.appendChild(itemSpaceDiv)
                    itemDiv.append(itemPriceDiv);

                    or_li.appendChild(itemDiv);
                    order_sublist.appendChild(or_li)
                    console.log("ADDED :", ord.name, " DEX - ", order_array.indexOf(ord))

            })

            console.log("SUBTOTAL: ", Number(subTotal))
            console.log("ORDER ARRAY: ", order_array)
            let tot_price = Number(subTotal);
            let tot_price_us = (subTotal/160).toFixed(2)
            let total_div = document.createElement("div");
            total_div.innerHTML = `Sub-Total : 🇯🇲$${tot_price}   ||   🇺🇸$${tot_price_us}`
            order_totalDiv.appendChild(total_div);
            orderWrapper.innerHTML = "";

            let addNewItemBtn = document.createElement("button");
            addNewItemBtn.innerHTML = "Add Another Item";
            let completeOrderBtn = document.createElement("button");
            completeOrderBtn.innerHTML = "Complete Order";

            let orderBtnsDiv = document.createElement("div");
            orderBtnsDiv.style.display = "flex";
            orderBtnsDiv.style.marginTop = "35px";
            completeOrderBtn.style.marginLeft = "30px";
            orderBtnsDiv.appendChild(addNewItemBtn);
            orderBtnsDiv.appendChild(completeOrderBtn);


            orderWrapper.appendChild(headButtonDiv)
            orderWrapper.appendChild(orderTitle);
            orderWrapper.appendChild(order_sublist);
            orderWrapper.appendChild(order_totalDiv);
            orderWrapper.appendChild(orderBtnsDiv)

            addNewItemBtn.onclick = function(){
                const messDiv = document.createElement("div");
                messDiv.style.marginTop = "15px";
                const messTitle = document.createElement("h5");
                messTitle.innerHTML = "What else would you like to order? <br/> Please select from the options above to view menu items.";
                messDiv.appendChild(messTitle)
                contentDiv.innerHTML = "";
                orderWrapper.innerHTML = "";
                total_div.innerHTML = "";
                contentDiv.appendChild(headDiv);
                contentDiv.appendChild(menu_opts_wrapper);
                contentDiv.appendChild(messDiv);
            }

            completeOrderBtn.onclick = function(){
                const dialogPopup = document.createElement("dialog");
                dialogPopup.id = "dialog";
                const dialogContentWrapper = document.createElement("div");
                // dialogContentWrapper.style.display = "flex";
                // dialogContentWrapper.style.flexDirection = "colunm";
                
                const dialogMessageWrapper = document.createElement("div");
                dialogMessageWrapper.innerHTML = `Oayta Bot: Confirm Your Order.`

                const dialogOrderWrapper = document.createElement("div");
                dialogOrderWrapper.appendChild(order_sublist);
                dialogOrderWrapper.appendChild(order_totalDiv);

                const dialogButtonsWrapper = document.createElement("div");
                dialogButtonsWrapper.style.display = "flex";
                dialogButtonsWrapper.style.justifyContent = "space-between";
                dialogButtonsWrapper.style.marginTop = "15px";
                const confirmBtn = document.createElement("button");
                confirmBtn.innerHTML = "Complete Purchase";
                const cancelBtn = document.createElement("button");
                cancelBtn.innerHTML = "Add Another Item";
                const newOrderBtn = document.createElement("button");
                newOrderBtn.innerHTML = "Cancel Order";

                dialogButtonsWrapper.appendChild(confirmBtn);
                // dialogButtonsWrapper.appendChild(cancelBtn);
                dialogButtonsWrapper.appendChild(newOrderBtn);



                dialogContentWrapper.appendChild(dialogMessageWrapper);
                dialogContentWrapper.appendChild(dialogOrderWrapper);
                dialogContentWrapper.appendChild(dialogButtonsWrapper);

                dialogPopup.appendChild(dialogContentWrapper);
                document.body.appendChild(dialogPopup);
                document.getElementById("dialog").showModal();

                confirmBtn.onclick = function(){
                    dialogMessageWrapper.innerHTML = `Processing......`;
                    dialogMessageWrapper.innerHTML = `Oayta Bot: Your payment was received. Thank you for choosing Kool Runnings Resturant!`;
                    dialogButtonsWrapper.innerHTML = ""
                    newOrderBtn.innerHTML = "New Order";
                    dialogButtonsWrapper.appendChild(newOrderBtn);

                }

                cancelBtn.onclick = function(){
                    document.getElementById("dialog").close();
                    const messDiv = document.createElement("div");
                    messDiv.style.marginTop = "15px";
                    const messTitle = document.createElement("h5");
                    messTitle.innerHTML = "Oayta Bot: What else would you like to order? <br/> Please select from the options above to view menu items.";
                    messDiv.appendChild(messTitle)
                    contentDiv.innerHTML = "";
                    orderWrapper.innerHTML = "";
                    total_div.innerHTML = "";
                    contentDiv.appendChild(headDiv);
                    contentDiv.appendChild(menu_opts_wrapper);
                    contentDiv.appendChild(messDiv);
                    dialogOrderWrapper.appendChild(order_sublist);
                    dialogOrderWrapper.appendChild(order_totalDiv);
                }

                newOrderBtn.onclick = function() {
                    order_array = [];
                    autoMenu()
                }


            }

                contentDiv.innerHTML = ""
                contentDiv.appendChild(headDiv);
                contentDiv.appendChild(botMessDiv);
                contentDiv.appendChild(orderWrapper);
                document.body.appendChild(contentDiv);
            }
        };
    })
        sideDiv.appendChild(sid_list)

         

    bfBtn.onclick = function() {
        ordering_from = "bk"
        contentDiv.innerHTML = ""
        contentDiv.appendChild(headDiv);
        contentDiv.appendChild(menu_opts_wrapper);
        contentDiv.appendChild(breaDiv);
        document.body.appendChild(contentDiv);
    };
    lhBtn.onclick = function() {
        ordering_from = "lh"
        contentDiv.innerHTML = ""
        contentDiv.appendChild(headDiv);
        contentDiv.appendChild(menu_opts_wrapper);
        contentDiv.appendChild(luncDiv);
        document.body.appendChild(contentDiv);
    };
    drBtn.onclick = function() {
        ordering_from = "dr"
        contentDiv.innerHTML = ""
        contentDiv.appendChild(headDiv);
        contentDiv.appendChild(menu_opts_wrapper);
        contentDiv.appendChild(dinnDiv);
        document.body.appendChild(contentDiv);
    };
    sidesBtn.onclick = function() {
        ordering_from = "sides";
        ordering_meal = false;
        contentDiv.innerHTML = ""
        contentDiv.appendChild(headDiv);
        contentDiv.appendChild(menu_opts_wrapper);
        contentDiv.appendChild(sideDiv);
        document.body.appendChild(contentDiv);
    };

    contentDiv.appendChild(headDiv);
    contentDiv.appendChild(menu_opts_wrapper);
    contentDiv.appendChild(messDiv);
    document.body.appendChild(contentDiv);


}

autoMenu()


