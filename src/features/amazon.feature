Feature: Login to amazon shopping
    As an amazon user
    I want to be able to login and add items to my cart

    Background:
        Given I clean the cart

    Scenario: Add products to the cart
        Given search for product "hats for men"
        When select first result from list
        And add 2 items and store value in memory with key "menHatPrice"        
        And go to cart
        Then price and quantity are correct
        And search for product "hats for women"
        And select first result from list
        And add 1 items and store value in memory with key "womenHatPrice"
        And go to cart
        Then price and quantity are correct after adding second element
        And go to cart
        And remove 1 item from the first item added
        And go to cart        
        Then price is udpated correctly