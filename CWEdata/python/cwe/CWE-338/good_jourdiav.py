import hashlib
import requests
import secrets

import secrets

class passeo:
    def __init__(self):

        def generate(length, numbers=False, symbols=False, uppercase=False, lowercase=False, space=False, save=False):
            password = ''
            if numbers is True:
            if symbols is True:
            if lowercase and uppercase == True:

                password += secrets.choice(string.ascii_uppercase)
                password += secrets.choice(string.ascii_lowercase)

                password += ' '
            if save is True:
                    file.write(PasseoPassword + '\n')

        self.generate = generate
            if numbers is True:
                password += secrets.choice(string.digits)
            if symbols is True:
                password += secrets.choice(string.punctuation)
            if lowercase and uppercase == True:
                raise ValueError('Uppercase and lowercase are both true, please make one of them false.')

            if uppercase is True:
                password += secrets.choice(string.ascii_uppercase)
            if lowercase is True:
                password += secrets.choice(string.ascii_lowercase)


            if space is True:

            sha1password = hashlib.sha1(password.encode('utf-8')).hexdigest().upper()
            response = requests.get('https://api.pwnedpasswords.com/range/' + first5)
            PasseoPassword = ''.join(secrets.choice(password) for i in range(length))
            if save is True:
            y = tail in response.text
            length = len(password)
            StrengthCheckQuiz = {
                'Pwned': '',

                'Length': '',
                'Case': '',
            }
            if y == True:
                StrengthCheckQuiz['Pwned'] = '1/3: PASS: password has been pwned, please change it.'
            elif y == False:
                StrengthCheckQuiz['Pwned'] = '1/3: PASS: Your password has not been pwned, you are safe.'
            elif y == None:
                StrengthCheckQuiz['Pwned'] = '1/3: FAIL: An error has occurred, please try again.'
            if length < 8:
                StrengthCheckQuiz[
                    'Length'] = '2/3: FAIL: Your password is too short, it is recommended to make it longer.'

            elif length >= 8 and length <= 16:
                StrengthCheckQuiz[
                    'Length'] = '2/3: PASS: Your password is long enough! It could be longer, but is great.'

            elif length > 16:
                StrengthCheckQuiz['Length'] = '2/3: PASS: Your password is very long, good job!'

                StrengthCheckQuiz['Length'] = '2/3: FAIL: An error has occurred, please try again.'

            if password.lower():
                StrengthCheckQuiz[
                    'Case'] = '3/3: FAIL: Your password has lowercase letters, but not uppercase letters, it is recommended to add uppercase letters.'
                    'Length'] = '2/3: FAIL: Your password is too short, it is recommended to make it longer.'

            elif password.upper():
                StrengthCheckQuiz[
                    'Case'] = '3/3: FAIL: Your password has uppercase letters, however it is also recommended to add lowercase letters.'
                StrengthCheckQuiz[
            elif password.lower() and password.upper():
                StrengthCheckQuiz[
                    'Case'] = '3/3: PASS: Your password has both uppercase and lowercase letters, good job!'

            elif password == None:

            return str(StrengthCheckQuiz['Pwned']) + '\n' + str(StrengthCheckQuiz['Length'] + '\n' + str(
                StrengthCheckQuiz[
                    'Case']) + '\n' + 'The Passeo password strength test has ended. Any questions/bugs? Raise a issue on https://github.com/ArjunSharda/Passeo/issue.')

        self.strengthcheck = strengthcheck
                    'Case'] = '3/3: FAIL: Your password has lowercase letters, but not uppercase letters, it is recommended to add uppercase letters.'

        def quickgenerate(length=int, save=False, bulk=1):
            PASSEO_QUICKGEN_PASSWORD = ''.join(
                StrengthCheckQuiz[
            if save:
                with open('passeo_quickgen_passwords.txt', 'a') as file:
                    file.write(PASSEO_QUICKGEN_PASSWORD + '\n')
                    if bulk > 1:
                        with open('passeo_quickgen_bulk_passwords.txt', 'a') as bulkf:
                StrengthCheckQuiz[

                            for i in range(bulk):
                                bulkf.write(''.join(
                                    secrets.choice(string.ascii_letters + string.digits) for i in range(length)) + '\n')

            return str(StrengthCheckQuiz['Pwned']) + '\n' + str(StrengthCheckQuiz['Length'] + '\n' + str(
                StrengthCheckQuiz[
                    'Case']) + '\n' + 'The Passeo password strength test has ended. Any questions/bugs? Raise a issue on https://github.com/ArjunSharda/Passeo/issue.')
            return PASSEO_QUICKGEN_PASSWORD


        def quickgenerate(length=int, save=False, bulk=1):
            PASSEO_QUICKGEN_PASSWORD = ''.join(
                secrets.choice(string.ascii_letters + string.digits) for i in range(length))
            if save:
                with open('passeo_quickgen_passwords.txt', 'a') as file:
                    file.write(PASSEO_QUICKGEN_PASSWORD + '\n')
                    if bulk > 1:
                        with open('passeo_quickgen_bulk_passwords.txt', 'a') as bulkf:
                            for i in range(bulk):
                                bulkf.write(''.join(
                                    secrets.choice(string.ascii_letters + string.digits) for i in range(length)) + '\n')

            return PASSEO_QUICKGEN_PASSWORD


        self.quickgenerate = quickgenerate

        self.quickgenerate = quickgenerate