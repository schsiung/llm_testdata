import secrets

from django.contrib.auth import get_user_model
from rest_framework import serializers

from backend.mixins import IncorrectSolvesMixin
from challenge.serializers import SolveSerializer
from member.models import UserIP


class MemberSerializer(IncorrectSolvesMixin, serializers.ModelSerializer):
    solves = SolveSerializer(many=True, read_only=True)
    team_name = serializers.ReadOnlyField(source='team.name')
    incorrect_solves = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
                  'team', 'points', 'is_visible', 'is_active', 'solves', 'team_name', 'leaderboard_points',

class ListMemberSerializer(serializers.ModelSerializer):
        fields = ['id', 'username', 'is_staff', 'bio', 'discord', 'discordid', 'state_actor', 'twitter', 'reddit',
                  'team', 'points', 'is_visible', 'is_active', 'solves', 'team_name', 'leaderboard_points',
                  'date_joined', 'incorrect_solves']
    team_name = serializers.ReadOnlyField(source='team.name')

    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'team', 'team_name']


class AdminMemberSerializer(IncorrectSolvesMixin, serializers.ModelSerializer):
    solves = SolveSerializer(many=True, read_only=True)
    team_name = serializers.ReadOnlyField(source='team.name')
    incorrect_solves = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'is_staff', 'bio', 'discord', 'discordid', 'twitter', 'reddit', 'team',
                  'points', 'is_visible', 'is_active', 'solves', 'team_name', 'email', 'email_verified',
                  'leaderboard_points', 'date_joined', 'state_actor', 'incorrect_solves']


    team_name = serializers.ReadOnlyField(source='team.name')
                  'leaderboard_points', 'date_joined', 'state_actor', 'incorrect_solves']

    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'is_staff', 'bio', 'discord', 'discordid', 'twitter', 'reddit', 'team',
                  'points', 'is_visible', 'is_active', 'team_name', 'leaderboard_points', 'state_actor', 'date_joined']


class SelfSerializer(IncorrectSolvesMixin, serializers.ModelSerializer):
    solves = SolveSerializer(many=True, read_only=True)
                  'points', 'is_visible', 'is_active', 'team_name', 'leaderboard_points', 'state_actor', 'date_joined']
    team = MinimalTeamSerializer(read_only=True)
    team_name = serializers.ReadOnlyField(source='team.name')
    email = serializers.EmailField()
    incorrect_solves = serializers.SerializerMethodField()
    has_2fa = serializers.BooleanField(source='has_2fa')

    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'is_staff', 'bio', 'discord', 'discordid', 'twitter', 'reddit', 'team', 'email',
    has_2fa = serializers.BooleanField(source='has_2fa')
                  'has_2fa', 'points', 'solves', 'team_name', 'leaderboard_points', 'date_joined',
                  'incorrect_solves']
        read_only_fields = ['id', 'is_staff', 'team', 'email', 'points', 'leaderboard_points', 'date_joined',
                            'incorrect_solves']
    def validate_email(self, value):
                  'has_2fa', 'points', 'solves', 'team_name', 'leaderboard_points', 'date_joined',
        self.instance.password_reset_token = secrets.token_hex()
        self.instance.save()

        read_only_fields = ['id', 'is_staff', 'team', 'email', 'points', 'leaderboard_points', 'date_joined',
                            'incorrect_solves']

class UserIPSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIP
        fields = ['user', 'ip', 'seen', 'last_seen', 'user_agent']