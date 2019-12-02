Feature: Login to amazon shopping
    As an amazon user
    I want to be able to login and add items to my cart

    Background:
        Given I clean the cart

    Scenario: Scenario Outline name: Launch amazon app
        Given search for product
        When select first result from list
        And add 2 items
        And go to cart
        Then price and quantity are correct