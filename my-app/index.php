<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Your JSON data
$data = [
    "scope" => [
        ["title" => "App scope"],
        ["done" => false],
        ["id" => 1, "Question" => "What is the name of the App?", "answer" => "", "hint" => "What is the name of your application? name your app", "skip" => false],
        ["id" => 2, "Question" => "what are the goals of the App?", "answer" => "", "hint" => "what is the purpose of your app, what are you trying to achieve with it?", "skip" => false],
        ["id" => 3, "Question" => "what problems will the app solve?", "answer" => "", "hint" => "what are the problems the app will solve for the user", "skip" => false],
        ["id" => 4, "Question" => "What will the app cover and what won't it cover?", "answer" => "", "hint" => "name the things your app will do and what it won't do", "skip" => false],
    ],
    "architecture" => [
        ["title" => "System design & architecture"],
        ["done" => false],
        ["id" => 5, "Question" => "introduction to the architecture of the app", "answer" => "", "hint" => "what is the layout of the app's architecture, what will the architecture look like?", "skip" => false],
        ["id" => 6, "Question" => "network connectivity requirements?", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 7, "Question" => "design Principles", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 8, "Question" => "data model", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 9, "Question" => "User interface Design", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 10, "Question" => "System Components", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 11, "Question" => "External interfaces", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 12, "Question" => "Algorithms and Logic", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 13, "Question" => "Data flow and processing", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 14, "Question" => "Deployment and Configuration", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 15, "Question" => "Dependencies and third-party libraries", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 16, "Question" => "Appendices", "answer" => "", "hint" => "", "skip" => false],
    ],
    "description" => [
        ["title" => "General description"],
        ["done" => false],
        ["id" => 17, "Question" => "Use cases", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 18, "Question" => "Product limitations and constraints", "answer" => "", "hint" => "", "skip" => false],
    ],
    "features" => [
        ["title" => "features & requirements"],
        ["done" => false],
        ["id" => 19, "Question" => "Features", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 20, "Question" => "Functional requirements", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 21, "Question" => "External interface requirement", "answer" => "", "hint" => "", "skip" => false],
        ["id" => 22, "Question" => "Non-functional requirements", "answer" => "", "hint" => "", "skip" => false],
    ],
];

// Convert the array to a JSON string
$jsonString = json_encode($data, JSON_PRETTY_PRINT);

// Output the JSON string
echo $jsonString;