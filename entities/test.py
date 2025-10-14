
def is_palindrome():
            p = input("Ingrese una frase: ")
            #si es palindromo retorna True y si no False

            p = p.lower()
            p = p.replace(" ", "")
            palindrome = p[::-1]

            if p == palindrome:
                return print(True)
            else:
                return print(False)
            
is_palindrome()