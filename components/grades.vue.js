const Grades = {
    template: `
        <div id="grades">
            <nav>
                <h1>Vue My Courses</h1>
            </nav>
            <h1 class="title">Grades</h1>
            <div id="container">
                <div id="toolBar">
                    <div>
                        <input v-if="show" type="search" name="search" placeholder="Search" id="search" />
                    </div>
                    <button v-on:click="show = !show"><span v-if="show">Create</span><span v-else>Cancel</span></button>
                </div>
                <transition name="flip" mode="out-in">
                    <table id="allGrades" v-if="show">
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
                    </table>
                    <div id="createGrade" v-else>
                        <div>
                            <h2>Create New</h2>
                        </div>    
                        <form>
                            <input type="text" name="course" id="course" aria-label="course" placeholder="Course" />
                            <input type="number" name="grade" id="grade" aria-label="grade" placeholder="99" />
                            <button>Create</button>
                        </form>
                    </div>
                </transition>
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