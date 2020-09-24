// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var PasswordLength = 0;
  var UseLower = "";
  var UseUpper = "";
  var UseSpecial = "";
  var UseNumbers = "";

  while ((PasswordLength < 8) || (PasswordLength > 128))
  {
    PasswordLength = Number(prompt("Enter a number between 8-128"));
    if (isNaN(PasswordLength) || (!Number.isInteger(PasswordLength)))
    {
      PasswordLength = 0;
    }
  }

  while (UseLower !== 'y' && UseLower !== 'n')
  {
    UseLower = prompt("Enter 'y', 'n' to include lowercase characters")
    UseLower = UseLower.toLowerCase()
  }

  while (UseUpper !== 'y' && UseUpper !== 'n')
  {
    UseUpper = prompt("Enter 'y', 'n' to include Uppercase characters")
    UseUpper = UseUpper.toLowerCase()
  }

  while (UseSpecial !== 'y' && UseSpecial !== 'n')
  {
    UseSpecial = prompt("Enter 'y', 'n' to include Special characters")
    UseSpecial = UseSpecial.toLowerCase()
  }

  while (UseNumbers !== 'y' && UseNumbers !== 'n')
  {
    UseNumbers = prompt("Enter 'y', 'n' to include integers")
    UseNumbers = UseNumbers.toLowerCase()
  }

  return GenerateFinalPassword(PasswordLength, UseLower, UseUpper, UseSpecial, UseNumbers);
}

function GenerateFinalPassword(Length, Lower, Upper, Special, Numbers)
{
  var passwd = "";
  var LowerString = "abcdefghijklmnopqrstuvwxyz";
  var UpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var SpecialCharString = "~!@#$%-+=_";
  var NumbersString = "1234567890";
  var TypesString = "";
  var TypesStringLength = 0;

  if (Upper == "y")
  {
    TypesString += UpperString;    
  }

  if (Lower == "y")
  {
    TypesString += LowerString;    
  }

  if (Special =="y")
  {
    TypesString += SpecialCharString;
  }

  if (Numbers =="y") 
  {
    TypesString += NumbersString;
  }

  TypesStringLength = TypesString.length;

  for (var i = 0; i < Length; i++)
  {
    passwd += TypesString[Math.floor(Math.random() * TypesStringLength)];
  }

  return passwd;
}

// Add event listener to generate button

