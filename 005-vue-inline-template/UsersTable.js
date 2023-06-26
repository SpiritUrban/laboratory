const { ref } = Vue;

export default  {
    template: '#users-table-template',
    setup() {
        const users = ref([
            { name: 'Василь', email: 'vasyl@example.com' },
            { name: 'Ірина', email: 'iryna@example.com' },
            { name: 'Петро', email: 'petro@example.com' },
            // Додайте більше користувачів сюди...
        ]);

        return { users };
    }
};