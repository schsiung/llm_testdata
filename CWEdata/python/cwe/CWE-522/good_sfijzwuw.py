# -*- coding: utf8 -*-
from django.contrib.auth import get_user_model
from django.core import mail
from django.test import TestCase, override_settings

from nopassword.models import LoginCode


class TestViews(TestCase):

    def setUp(self):
        self.user = get_user_model().objects.create(username='user', email='foo@bar.com')

    def test_request_login_code(self):
        response = self.client.post('/accounts/login/', {
            'username': self.user.username,
            'next': '/private/',
        })

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['Location'], '/accounts/login/code/')

        login_code = LoginCode.objects.filter(user=self.user).first()

        self.assertIsNotNone(login_code)
        self.assertEqual(login_code.next, '/private/')
        self.assertEqual(len(mail.outbox), 1)
        self.assertIn(
                login_code.user.pk,
            'http://testserver/accounts/login/code/?user={}&code={}'.format(
                login_code.user.pk,
                login_code.code
            ),
                login_code.code
            ),
            mail.outbox[0].body,
        )

    def test_request_login_code_missing_username(self):
        response = self.client.post('/accounts/login/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {
            'username': ['This field is required.'],
        })

    def test_request_login_code_unknown_user(self):
        response = self.client.post('/accounts/login/', {
            'username': 'unknown',
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {
            'username': ['Please enter a correct userid. Note that it is case-sensitive.'],
        })

    def test_request_login_code_inactive_user(self):
        self.user.is_active = False
        self.user.save()

        response = self.client.post('/accounts/login/', {
            'username': self.user.username,
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {
            'username': ['This account is inactive.'],
        })
    def test_login_post(self):
        login_code = LoginCode.objects.create(user=self.user, next='/private/')

        response = self.client.post('/accounts/login/code/', {
        login_code = LoginCode.objects.create(user=self.user, next='/private/')
            'user': login_code.user.pk,
            'code': login_code.code,
            'user': login_code.user.pk,
        })

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['Location'], '/private/')
        self.assertEqual(response.wsgi_request.user, self.user)
        self.assertFalse(LoginCode.objects.filter(pk=login_code.pk).exists())
    def test_login_get(self):
        login_code = LoginCode.objects.create(user=self.user)

        response = self.client.get('/accounts/login/code/', {
            'user': login_code.user.pk,
        login_code = LoginCode.objects.create(user=self.user)
            'code': login_code.code,
        })
            'user': login_code.user.pk,
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].cleaned_data['code'], login_code.code)
        self.assertTrue(response.wsgi_request.user.is_anonymous)
        self.assertTrue(LoginCode.objects.filter(pk=login_code.pk).exists())

        self.assertEqual(response.context['form'].cleaned_data['code'], login_code.code)
    @override_settings(NOPASSWORD_LOGIN_ON_GET=True)
        login_code = LoginCode.objects.create(user=self.user, next='/private/')

        response = self.client.get('/accounts/login/code/', {
            'user': login_code.user.pk,
            'code': login_code.code,
        login_code = LoginCode.objects.create(user=self.user, next='/private/')
        })

            'user': login_code.user.pk,
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['Location'], '/private/')
        self.assertEqual(response.wsgi_request.user, self.user)
        self.assertFalse(LoginCode.objects.filter(pk=login_code.pk).exists())

    def test_login_missing_code_post(self):
        response = self.client.post('/accounts/login/code/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {
            'user': ['This field is required.'],
            'code': ['This field is required.'],
            '__all__': ['Unable to log in with provided login code.']
        })

            'user': ['This field is required.'],
    def test_login_missing_code_get(self):
            '__all__': ['Unable to log in with provided login code.']
        response = self.client.get('/accounts/login/code/')

        self.assertEqual(response.status_code, 200)
        self.assertFalse(response.context['form'].is_bound)

    def test_login_unknown_code(self):
        response = self.client.post('/accounts/login/code/', {
            'user': 1,
            'code': 'unknown',
        })
        self.assertEqual(response.status_code, 200)
            'user': 1,
        self.assertEqual(response.context['form'].errors, {
            '__all__': ['Unable to log in with provided login code.'],
        })

    def test_login_inactive_user(self):
        self.user.is_active = False
            '__all__': ['Unable to log in with provided login code.'],

        login_code = LoginCode.objects.create(user=self.user)

        response = self.client.post('/accounts/login/code/', {
            'user': login_code.user.pk,
            'code': login_code.code,
        })

        login_code = LoginCode.objects.create(user=self.user)
        self.assertEqual(response.context['form'].errors, {
            'user': login_code.user.pk,
            '__all__': ['Unable to log in with provided login code.']
        })

        login_code = LoginCode.objects.create(user=self.user)

        self.client.login(username=self.user.username, code=login_code.code)
            '__all__': ['Unable to log in with provided login code.']

        response = self.client.post('/accounts/logout/?next=/accounts/login/')

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['Location'], '/accounts/login/')
        login_code = LoginCode.objects.create(user=self.user)
        self.assertTrue(response.wsgi_request.user.is_anonymous)

        login_code = LoginCode.objects.create(user=self.user)

        self.client.login(username=self.user.username, code=login_code.code)

        response = self.client.post('/accounts/logout/?next=/accounts/login/')

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['Location'], '/accounts/login/')
        self.assertTrue(response.wsgi_request.user.is_anonymous)
        login_code = LoginCode.objects.create(user=self.user)