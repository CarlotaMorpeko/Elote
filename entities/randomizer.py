import random
class Randomizer:
    
    def __init__(self, number1, number2, number3):
        self.number1 = number1
        self.number2 = number2
        self.number3 = number3
        
    def is_jackpot(self) -> bool: 
        
        num1 = int(self.number1)
        num2 = int(self.number2)
        num3 = int(self.number3)
        ganador = random.randint(1,100)
        if num1 == ganador or num2 == ganador or num3 == ganador:
            return True
        else:
            return False
        