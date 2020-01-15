
## FRONTEND ASSIGNMENT
Enclosed you will find a vacancy page designed by the design team at Site.nu. Your goal is to realize
the following tasks in this page into a responsive webpage, accessible on any platform.
Some things you should keep in mind:
## • Use semantically correct HTML5-elements to markup the content
## • Use the latest CSS techniques where possible
## • Do not make use of any JavaScript libraries, just vanilla JS
Design
The article is designed for a desktop view. The final result should work on mobile, tablet and
desktop. Specifically on iOS, Android, the latest Chrome, Firefox and Edge. Good thing is we do not
support any of the IE’s .
The font used in the design is Poppins. Just look it up on Google Fonts. In this assignment we will not
pay attention on how it is implemented.
To make the task a bit easier you are provided with access to InVision (if you do not know what it is,
use Google to find out). In really short it is a prototyping tool that gives you access to most of the
CSS used on the page.
Link to InVision:
## https://invis.io/6YUF8ALGB5U
All resources are provided in the zip file containing this file.
Interactive components
Content generator
We have a small JavaScript task for you.
The section in the design named ‘Content generator’ contains a preview of the answer of this task.
## The goal of the task is to dynamically generate the content of this section. The condition is as follows:
We take the numbers up to 300 (incl. 0) and output them to the page.
If a number is a multiple of 3, you should print “FOO” instead of the number.
If a number is a multiple of 5, you should print “BAR” instead of the number.
If a number is a multiple of 7, you should print “BAZ” instead of the number.
In case multiple conditions are met, print all viable options in ascending order (check the design for
an example). 
## Vacancies

## At this section we ask you to extract the data for the shown vacancies from the following API endpoint:
https://site.nu/interview-endpoint.php

In order to extract the data some credentials are needed. You will have to POST the following data as a JSON with following keys and values -> “username“ – “sitenu”, and the “password” –
“weareawesome”.

## PHP
Create an endpoint protected with the following credentials:
- Username: sitenu
- Password: weareawesome
## Should return the following errors:
{
 "status": "error",
 "data": "Username is incorrect"
}
{
 "status": "error",
 "data": "Password is incorrect"
}
On success should return:
{
 "status": "success",
 "data": [
 {
 "product_name": "Mojito",
 "price": "1.5",
 "quantity": "4"
 },
 {
 "product_name": "Bloody Marry",
 "price": "2.5",
 "quantity": "9"
 },
 {
 "product_name": "Gin & Tonic",
 "price": "4.5",
 "quantity": "9"
 }
 ]
}