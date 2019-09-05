#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <stdlib.h>

using namespace std;

const vector<vector<int>> win_conditions = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}, // Horizontal wins
                                            {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, // Vertical wins
                                            {0, 4, 8}, {2, 4, 6}}; // Diagonal wins

bool hasWon(vector<string> input, char player_character){
    stringstream convert;
    convert << player_character;

    for (int i = 0; i < win_conditions.size(); i++){
        int sum = 0;

        for (int ii = 0; ii < 3; ii++){  // Checking each array within the arrays of win conditions to see if each spot is filled with the same character
            if (input[win_conditions[i][ii]] == convert.str())
                sum++;
        }

        if (sum == 3)  // The player has won if each character is in the same array.
            return true;
    }

    return false;
}

void makeBoard(vector<string> input){
    //Putting the board so that the options to choose are available and the previous selections are still there.
    for (int i = 0; i < input.size(); i++){
        if (input[i] != " "){
            if (i == 2 || i == 5 || i == 8) // Putting the X or Os that are in the board
                cout << " | " << input[i] << " | " << endl;
            else
                cout << " | " << input[i];
        }
        else{  // Putting the numbers that are still available.
            if (i == 2 || i == 5 || i == 8)
                cout << " | " << i + 1 << " | " << endl;
            else
                cout << " | " << i + 1;
        }
    }
}

void chooseBoard(vector<string> &input, char player_character, bool &wants_draw){
    int choice;
    stringstream convert;
    convert << player_character;

    cout << "Player " << player_character <<" please choose the number you'd like to choose! (place 0 to draw): ";
    cin >> choice;

    if (choice == 0){
        wants_draw = true;
    }
    else if (input[choice - 1] == " "){
        input[choice - 1] = convert.str();  // Placing the character that will be in the input vector.

        system("clear");
    }
    else{
        cout << "Invalid choice, please try again!" << endl;
        chooseBoard(input, player_character, wants_draw);
    }
}



void play(vector<string> input){
    char player_character = 'X';
    bool wants_draw = false;

    while(!hasWon(input, player_character) && !wants_draw){        // If the player hasn't won from checking the available win conditions, loop back and change the player character.

        if (player_character == 'O')
            player_character = 'X';     // Changing which player is playing each time the loop goes.
        else
            player_character = 'O';


        makeBoard(input);
        chooseBoard(input, player_character, wants_draw);
    }
    char choice;

    if(wants_draw)
        cout << "Thanks for playing! Play again? (y/n): ";
    else
        cout << "Congratulations Player " << player_character << " you have won! \n Play again? (y/n): ";

wrongAnswer:
    try{
    cin >> choice;
    }catch(...){
        cout << "Please place a valid character" << endl;
        goto wrongAnswer;
    }

    if (choice == 'y'){
        vector<string> new_input;
        for (int i = 0; i < 9; i++)
            new_input.push_back(" ");

        system("cls");
        play(new_input);
    }
    else if (choice == 'n'){
        cout << "Thanks for playing!" << endl;
    }
}

int main()
{
    vector<string> input;

    cout << "Welcome to Tic Tac Toe!" << endl;
    cout << "--------------------" << endl;

    for (int i = 0; i < 9; i++)
        input.push_back(" ");

    play(input);
}
