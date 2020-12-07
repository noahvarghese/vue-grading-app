const Grades = {
    template: `
        <div id="grades">
            <nav>
                <h1>Vue My Courses</h1>
            </nav>
            <h1 class="title">Grades</h1>
            <div id="container">
                <div>
                    <input type="search" name="search" placeholder="Search" id="search" />
                    <button v-on:click="show = !show">Create</button>
                </div>
                <table>
                    <transition name="rotate-table">
                        <div id="allGrades" v-if="show">
                            <tr id="columnHeadings">
                                <th class="course">
                                    Course
                                    <div class="sort">
                                        <img class="sortImg" src="/assets/img/asc.png" alt="ascending" />
                                        <img class="sortImg" src="/assets/img/desc.png" alt="descending" />
                                    </div>
                                </th>
                                <th class="grade">
                                    Grade
                                    <div class="sort">
                                        <img class="sortImg" src="/assets/img/asc.png" alt="ascending" />
                                        <img class="sortImg" src="/assets/img/desc.png" alt="descending" />
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                            <tr v-for="grade in grades" v-bind:key="grade.course">
                                <td>{{ grade.course }}</td>
                                <td>{{ grade.grade }}</td>
                                <td>
                                    <div class="imgContainer">
                                        <img src="/assets/img/edit.png" alt="edit" />
                                        <img src="/assets/img/delete.png" alt="delete" />
                                    </div>
                                </td>
                            </tr>
                        </div>
                        <div id="createGrade" v-else>
                            <h4>Create New</h4>
                        </div>
                    </transition>
                </table>
            </div>
        </div>
    `,
    data() {
        return {
            show: true,
            grades: [
                {
                    course: "Emerging Web Tech",
                    grade: 100
                },
                {
                    course: "Test",
                    grade: 0
                }
            ]
        }
    }
}