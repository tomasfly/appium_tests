Feature: Login to amazon shopping
    As an amazon user
    I want to be able to login and add items to my cart

    Background:
        Given I clean the cart

    Scenario: Scenario Outline name: Add products to the cart
        Given search for product
        When select first result from list
        And add 2 items
        And go to cart
        Then price and quantity are correct
        And search for second product
        And select first result from list
        And add 1 items
        And go to cart
        Then price and quantity are correct after adding second element
        And go to cart
        And remove 1 item from the first item added
        And go to cart        
        Then price is udpated correctly