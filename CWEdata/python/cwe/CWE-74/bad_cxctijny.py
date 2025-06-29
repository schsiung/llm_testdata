# test code for iterating with lookup plugins
# (c) 2014, James Tanner <tanner.jc@gmail.com>

# This file is part of Ansible
#
# Ansible is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Ansible is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Ansible.  If not, see <http://www.gnu.org/licenses/>.

# WITH_ITEMS

- name: test with_items
  set_fact: "{{ item }}=moo"
  with_items:
    - 'foo'
    - 'bar'

- debug: var=foo
- debug: var=bar

- name: verify with_items results
  assert:
    that:
        - "foo == 'moo'"
        - "bar == 'moo'"

# WITH_NESTED

- name: test with_nested
  set_fact: "{{ item.0 + item.1 }}=x"
  with_nested:
    - [ 'a', 'b' ]
    - [ 'c', 'd' ]        

- debug: var=ac
- debug: var=ad
- debug: var=bc
- debug: var=bd

- name: verify with_nested results
  assert:
    that:
        - "ac == 'x'"
        - "ad == 'x'"
        - "bc == 'x'"
        - "bd == 'x'"

# WITH_SEQUENCE

- name: test with_sequence
  set_fact: "{{ 'x' + item }}={{ item }}"
  with_sequence: start=0 end=3

- name: verify with_sequence
  assert:
    that:
        - "x0 == '0'"
        - "x1 == '1'"
        - "x2 == '2'"
        - "x3 == '3'"

# WITH_RANDOM_CHOICE

- name: test with_random_choice
  set_fact: "random={{ item }}"
  with_random_choice:
    - "foo"
    - "bar" 

- name: verify with_random_choice
  assert:
    that:
        - "random in ['foo', 'bar']"

# WITH_SUBELEMENTS

- name: test with_subelements
  set_fact: "{{ '_'+ item.0.id + item.1 }}={{ item.1 }}"
  with_subelements:
    - element_data
    - the_list

- name: verify with_subelements results
  assert:
    that:
        - "_xf == 'f'"
        - "_xd == 'd'"
        - "_ye == 'e'"
        - "_yf == 'f'"

# WITH_TOGETHER        

- name: test with_together
  #shell: echo {{ item }}
  set_fact: "{{ item.0 }}={{ item.1 }}"
  with_together:
    - [ 'a', 'b', 'c', 'd' ]
    - [ '1', '2', '3', '4' ]

- name: verify with_together results
  assert:
    that:
        - "a == '1'"
        - "b == '2'"
        - "c == '3'"
        - "d == '4'"

# WITH_FIRST_FOUND

- name: create file for test
  shell: echo "foo" > {{ output_dir }}/foo1

- name: create file for test
  shell: echo "bar" > {{ output_dir }}/bar1

- name: test with_first_found
  #shell: echo {{ item }}
  set_fact: "first_found={{ item }}"
  with_first_found:
    - "{{ output_dir + '/does_not_exist' }}"
    - "{{ output_dir + '/foo1' }}"
    - "{{ output_dir + '/bar1' }}"

- name: set expected
  set_fact: first_expected="{{ output_dir | expanduser + '/foo1' }}"

- name: set unexpected
  set_fact: first_unexpected="{{ output_dir | expanduser + '/bar1' }}"

- name: verify with_first_found results
  assert:
    that:
        - "first_found == first_expected"  
        - "first_found != first_unexpected"

# WITH_LINES

- name: test with_lines
  #shell: echo "{{ item }}"
  set_fact: "{{ item }}=set" 
  with_lines: for i in $(seq 1 5); do echo "l$i" ; done;

- name: verify with_lines results
  assert:
    that:
        - "l1 == 'set'"
        - "l2 == 'set'"
        - "l3 == 'set'"
        - "l4 == 'set'"
        - "l5 == 'set'"

# WITH_INDEX
- name: create unindexed list
  shell: for i in $(seq 1 5); do echo "x" ; done;
  register: list_data

- name: create indexed list
  set_fact: "{{ item[1] + item[0]|string }}=set"
  with_indexed_items: list_data.stdout_lines  

- name: verify with_indexed_items result
  assert:
    that:
        - "x0 == 'set'"
        - "x1 == 'set'"
        - "x2 == 'set'"
        - "x3 == 'set'"
        - "x4 == 'set'"

# WITH_FLATTENED

- name: test with_flattened
  set_fact: "{{ item }}=flattened"
  with_flattened:
    - [ 'a__' ]
    - [ 'b__', ['c__', 'd__'] ]        

- name: verify with_flattened results
  assert:
    that:
        - "a__ == 'flattened'"
        - "b__ == 'flattened'"
        - "c__ == 'flattened'"
        - "d__ == 'flattened'"

